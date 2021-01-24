const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const tenantSchema = require('./Tenant')

//User model containing info on Tenants, former tenants, and owners
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  phoneNumber: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    match: [/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/, "Must be a valid phone number! (XXX) XXX-XXXX"]
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (password) {
        return (password.length > 5 ? true : false)
      },
      message: 'Password must be more than 5 characters!'
    }
  },
  //this tell us whether or not the user is an admin (owner)
  adminFlag: {
    type: Boolean,
    required: true
  },
  property: {
    type: Schema.Types.ObjectId,
    ref: 'Property'
  },
  tenantData: tenantSchema
});

// hash password before saving to database
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
