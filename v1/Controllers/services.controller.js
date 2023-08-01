const express = require("express");
const Services = require('../Models/services.model');
require('dotenv').config();



// publish a service
exports.AddAService = async (req, res) => {
    try {
        const service = req.body;
        // console.log(req.file);
        // console.log(req.body);
        const services = await Services.create(service);
        res.status(200).json({
            status: "Successful",
            message: "Data added Successfully",
            data: services
        });
    } catch (error) {
        res.json(error);
    }
}


// get single service
exports.getSingleService = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id }
        const service = await Services.findOne(query);
        return res.status(200).json(service);
    } catch (err) {
        res.status(404).json(err.message);
    }
}


// get all services
exports.getAllServices = async (req, res) => {
    try {
        const query = {};

        const result = await Services.find(query);

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


// delete a service
exports.deleteAService = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log(id);
        const query = { _id: id };
        // console.log(query);
        const result = await Services.deleteOne(query);
        res.send(result);
    } catch (err) {
        res.status(404).json(err);
    }
}



