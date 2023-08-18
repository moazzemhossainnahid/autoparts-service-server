const mongoose = require("mongoose");
const validator = require("validator");


const stafSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            unique: false,
            required: [true, "Name is required"],
        },
        age: {
            type: String,
            required: [true, "Age is required"],
            trim: true,
        },
        image: {
            required: true,
            type: String,
            validate: [validator.isURL, "Please provide Product Image URL"],
        },
        experience: {
            type: String,
            required: [true, "Experience is required"],
        },
        work_name: {
            type: String,
            required: [true, "Work Name is required"],
        },

    },
    {
        timestamps: true,
    }

);


const Stafs = mongoose.model("stafs", stafSchema);

module.exports = Stafs;