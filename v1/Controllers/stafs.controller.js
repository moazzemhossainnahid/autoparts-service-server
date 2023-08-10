const express = require("express");
const Stafs = require('../Models/stafs.model');
require('dotenv').config();



// add a staf
exports.AddAStaf = async (req, res) => {
    try {
        const staf = req.body;
        // console.log(req.file);
        // console.log(req.body);
        const stafs = await Stafs.create(staf);
        res.status(200).json({
            status: "Successful",
            message: "Data added Successfully",
            data: stafs
        });
    } catch (error) {
        res.json(error);
    }
};


// get single staf
exports.getSingleStaf = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id }
        const staf = await Stafs.findOne(query);
        return res.status(200).json(staf);
    } catch (err) {
        res.status(404).json(err.message);
    }
}


// get all stafs
exports.getAllStafs = async (req, res) => {
    try {
        const query = {};

        const result = await Stafs.find(query);

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


// delete a staf
exports.deleteAStaf = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log(id);
        const query = { _id: id };
        // console.log(query);
        const result = await Stafs.deleteOne(query);
        res.send(result);
    } catch (err) {
        res.status(404).json(err);
    }
}



