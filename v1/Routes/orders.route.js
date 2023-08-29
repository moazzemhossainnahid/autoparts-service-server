const express = require("express");
const ordersController = require("../Controllers/orders.controller");
const verifyToken = require("../Middlewares/verifyToken");
const router = express.Router();

// get all orders
router.get("/", ordersController.getAllOrders);

// get single order
router.get("/:id", ordersController.getSingleOrder);

// delete a order
router.delete("/:id", ordersController.deleteAnOrder);

// approve a order
router.put("/:id", ordersController.confirmAnOrder);

module.exports = router;
