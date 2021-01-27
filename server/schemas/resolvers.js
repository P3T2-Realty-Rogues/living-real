const { AuthenticationError } = require("apollo-server-express");
const { User, Maintenance, Property } = require("../models");
const { signToken } = require("../utils/auth");
//const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    users: async () => {
      const userData = await User.find().select("-__v -password").populate('property');

      return userData;
    },
    user: async (parent, { _id }) => {
      return await User.findById(_id).populate('property')
    },
    owners: async () => {
      return await User.find({
        adminFlag: true
      }).select("-__v -password");
    },
    tenants: async () => {
      return await User.find({
        adminFlag: false
      }).select("-__v -password").populate('property');
    },
    properties: async () => {
      return await Property.find().select("-__v").populate('ownerInfo.tenant')
    },
    property: async (parent, { _id }) => {
      return await Property.findById(_id)
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
    updateUser: async (parent, args, context) => {

      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true }).populate('property');
      }

      throw new AuthenticationError('Not logged in');
    },
    moveUser: async (parent, {userId, propertyId}, context) => {

      if (context.user.adminFlag) {
        const user = await User.findByIdAndUpdate({_id: userId}, {property: propertyId}, { new: true }).populate('property');
        await Property.findOneAndUpdate(
          { _id: propertyId },
          { $addToSet: {'ownerInfo.tenant': userId } } ,
          { new: true }
        ).populate('ownerInfo.tenant')
        return user
      }

      throw new AuthenticationError('Not Authorized');
    },
    deleteUser: async (parent, { _id }, context) => {
      if (context.user.adminFlag) {
        return await User.findByIdAndDelete(_id);
      }

      throw new AuthenticationError('Not Authorized');
    },
    addProperty: async (parent, args) => {
      const property = await Property.create(args);

      return property;
    },
    updateProperty: async (parent, args, context) => {
      if (context.user.adminFlag) {
        return await Property.findByIdAndUpdate(args.propertyId, args, { new: true });
      }

      throw new AuthenticationError('Not Authorized');
    },
    deleteProperty: async (parent, { _id }, context) => {
      if (context.user.adminFlag) {
        return await Property.findByIdAndDelete(_id);
      }

      throw new AuthenticationError('Not Authorized');
    },
    addTenant: async (parent, {propertyId, tenantId}) => {

      const updatedProperty = await Property.findOneAndUpdate(
        { _id: propertyId },
        { $addToSet: {'ownerInfo.tenant': tenantId } } ,
        { new: true }
      ).populate('ownerInfo.tenant');
  
      return updatedProperty;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  },
};

module.exports = resolvers;
