const { AuthenticationError } = require("apollo-server-express");
const { User, Maintenance, Property } = require("../models");
const { signToken } = require("../utils/auth");
//const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    users: async () => {
      const userData = await User.find().select("-__v -password");
      
      return userData;
    },
    owners: async () => {
      return await User.find({
        adminFlag: true
      }).select("-__v -password");
    },
    tenants: async () => {
      return await User.find({
        adminFlag: false
      }).select("-__v -password");
    },
    properties: async () => {
      return await Property.find().select("-__v")
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    addProperty: async (parent, args) => {
      const property = await Property.create(args);

      return property;
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
