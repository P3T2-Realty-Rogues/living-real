const mongoose = require("mongoose");
const { Schema } = mongoose;

//this is data linked to the User model that tells us if they are actively renting and what their lease date is
const tenantSchema = new Schema(
  {
    leaseDate: {
      type: String,
      trim: true,
    },
    activeTenant: {
      type: Boolean,
    },
  },
  {
    _id: false,
  }
);

module.exports = tenantSchema;
