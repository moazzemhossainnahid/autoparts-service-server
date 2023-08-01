const express = require("express");
const Orders = require('../Models/orders.model');
require('dotenv').config();



// get single order
exports.getSingleOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id }
        const order = await Orders.findOne(query);
        return res.status(200).json(order);
    } catch (err) {
        res.status(404).json(err.message);
    }
}


// get all orders
exports.getAllOrders = async (req, res) => {
    const query = {};
    const orders = await Orders.find(query);
    res.send(orders)
}


// delete a order
exports.deleteAnOrder = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log(id);
        const query = { _id: id };
        // console.log(query);
        const result = await Orders.deleteOne(query);
        res.send(result)
    } catch (err) {
        res.status(404).json(err);
    }
}


// confirm an order
exports.confirmAnOrder = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const filter = { _id: id };
        const options = { upsert: true };
        const updateDoc = {
            $set: { delivery_status: 'confirmed' }
        };
        const result = await Orders.updateOne(filter, updateDoc, options);
        res.send(result);
    } catch (err) {
        res.status(404).json(err);
    }
}

