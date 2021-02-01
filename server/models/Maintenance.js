const mongoose = require("mongoose");
const { Schema } = mongoose;

//this will be added after MVP is reached
const maintenanceSchema = new Schema({
  tenantID: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: String,
    trim: true,
    required: true,
  },
  text: {
    type: String,
    maxLength: 500,
    trim: true,
    required: true,
  },
  grantAccess: {
    type: Boolean,
  },
  critical: {
    type: Boolean,
  },
});

const Maintenance = mongoose.model("Maintenance", maintenanceSchema);

module.exports = Maintenance;
