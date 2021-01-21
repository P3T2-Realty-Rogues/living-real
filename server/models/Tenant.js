const mongoose = require('mongoose');
const { Schema } = mongoose;


const tenantSchema = new Schema ({
    leaseDate: {
        type: String,
        trim: true
    },
    activeTenant: {
        type: Boolean,
    }
},
{
    _id: false
})

module.exports = tenantSchema;