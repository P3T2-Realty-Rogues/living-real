const mongoose = require('mongoose');

const { Schema } = mongoose;

const propertySchema = new Schema ({
    propertyName: {
        type: String,
        required: true,
        trim: true
    },
    propertyType: {
        type: String,
        required: true,
        trim: true
    },
    streetAddress: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    zipCode: {
        type: Number,
        required: true,
        trim: true
    },
    sqFeet: {
        type: Number,
        required: true,
        trim: true
    },
    numBathrooms: {
        type: Number,
        required: true,
        trim: true
    },
    numBedroom: {
        type: Number,
        required: true,
        trim: true
    },
    balcony: {
        type: Boolean,
        required: true,
        trim: true
    },
    rent: {
        type: Number,
        required: true,
        trim: true
    },
    petDeposit: {
        type: Number,
        required: true,
        trim: true
    },
    renterDeposit: {
        type: Number,
        required: true,
        trim: true
    },
    appFee: {
        type: Number,
        required: true,
        trim: true
    }
})

const Property = mongoose.model('Property', propertySchema);