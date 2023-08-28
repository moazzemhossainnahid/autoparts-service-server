const express = require("express");
const Booking = require('../Models/booking.model');
require('dotenv').config();



// add a Booking
exports.saveABooking = async (req, res) => {
    try {
        const staf = req.body;

        const stafs = await Booking.create(staf);
        res.status(200).json({
            status: "Successful",
            message: "Data added Successfully",
            data: stafs
        });
    } catch (error) {
        res.json(error);
    }
};


// get single booking
exports.getSingleBooking = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id }
        const booking = await Booking.findOne(query);
        return res.status(200).json(booking);
    } catch (err) {
        res.status(404).json(err.message);
    }
}


// get all booking
exports.getAllBookings = async (req, res) => {
    try {
        const query = {};

        const result = await Booking.find(query);

        res.status(200).json({
            status: "success",
            message: "Data Get Successfull",
            data: { result }
        });


    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't Get Data",
            error: error.message
        });
    }
}


// delete a booking
exports.deleteABooking = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log(id);
        const query = { _id: id };
        // console.log(query);
        const result = await Booking.deleteOne(query);
        res.send(result);
    } catch (err) {
        res.status(404).json(err);
    }
}



