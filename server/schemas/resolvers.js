const { AuthenticationError } = require("apollo-server-express");
const { User, Maintenance, Property } = require("../models");
//const { signToken } = require("../utils/auth");
//const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    users: async () => {
      const userData = await User.find().select("-__v -password");
      //console.log("User data - ",userData)
      return userData;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
    addProperty: async (parent, args) => {
      const property = await Property.create(args);

      return property;
    },
  },
};

module.exports = resolvers;
