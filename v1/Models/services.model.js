const mongoose = require("mongoose");
const validator = require("validator");


const serviceSchema = mongoose.Schema(
    {
        id: { type: String },
        name: { type: String },
        brand: { type: String },
        description: { type: String },
        price: { type: String },
        image: { type: String },
        cartQuantity: { type: Number },
    },
    {
        timestamps: true,
    }

);


const Services = mongoose.model("services", serviceSchema);

module.exports = Services;