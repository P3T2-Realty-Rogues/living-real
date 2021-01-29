const { AuthenticationError } = require("apollo-server-express");
const { User, Maintenance, Property } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    users: async () => {
      const userData = await User.find()
        .select("-__v -password")
        .populate("property");

      return userData;
    },
    user: async (parent, { _id }) => {
      return await User.findById(_id).populate("property");
    },
    owners: async () => {
      return await User.find({
        adminFlag: true,
      }).select("-__v -password");
    },
    tenants: async () => {
      return await User.find({
        adminFlag: false,
      })
        .select("-__v -password")
        .populate("property");
    },
    properties: async () => {
      return await Property.find().select("-__v").populate("ownerInfo.tenant");
    },
    property: async (parent, { _id }) => {
      return await Property.findById(_id);
    },
    checkout: async (context, { _id }) => {
      const url = new URL(context.headers.referer).origin;

      const line_items = [];

      const rent = await stripe.products.create({
        name: "Monthly Rent"
      })

      const price = await stripe.prices.create({
        product: rent.id,
        unit_amount: 100,
        currency: "usd"
      })

      line_items.push({
        price: price.id,
      })

      console.log("line_items: ", line_items);

      const session = await stripe.checkout.sessions.create({
				payment_method_types: ['card'],
				line_items,
				mode: 'payment',
				success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
				cancel_url: `${url}/`,
      });
      
      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        }).populate("property");
      }

      throw new AuthenticationError("Not logged in");
    },
    moveUserIn: async (parent, { userId, propertyId }, context) => {
      if (context.user.adminFlag) {
        const user = await User.findByIdAndUpdate(
          { _id: userId },
          { property: propertyId },
          { new: true }
        ).populate("property");
        await Property.findOneAndUpdate(
          { _id: propertyId },
          { $addToSet: { "ownerInfo.tenant": userId } },
          { new: true }
        ).populate("ownerInfo.tenant");
        return user;
      }

      throw new AuthenticationError("Not Authorized");
    },
    moveUserOut: async (parent, { userId, propertyId }, context) => {
      if (context.user.adminFlag) {
        const user = await User.findByIdAndUpdate(
          { _id: userId },
          { property: null },
          { new: true }
        ).populate("property");
        await Property.findOneAndUpdate(
          { _id: propertyId },
          { $pull: { "ownerInfo.tenant": userId } },
          { new: true }
        ).populate("ownerInfo.tenant");
        return user;
      }

      throw new AuthenticationError("Not Authorized");
    },
    deleteUser: async (parent, { _id }, context) => {
      if (context.user.adminFlag) {
        return await User.findByIdAndDelete(_id);
      }

      throw new AuthenticationError("Not Authorized");
    },
    addProperty: async (parent, args, context) => {
      if (context.user.adminFlag) {
        return await Property.create(args);
      }

      throw new AuthenticationError("Not Authorized");
    },
    updateProperty: async (parent, args, context) => {
      console.log("Hitting this resolver");
      if (context.user.adminFlag) {
        return await Property.findByIdAndUpdate(args.propertyId, args, {
          new: true,
        });
      }
      throw new AuthenticationError("Not Authorized");
    },
    deleteProperty: async (parent, { _id }, context) => {
      if (context.user.adminFlag) {
        return await Property.findByIdAndDelete(_id);
      }

      throw new AuthenticationError("Not Authorized");
    },
    addTenant: async (parent, { propertyId, tenantId }) => {
      const updatedProperty = await Property.findOneAndUpdate(
        { _id: propertyId },
        { $addToSet: { "ownerInfo.tenant": tenantId } },
        { new: true }
      ).populate("ownerInfo.tenant");

      return updatedProperty;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
