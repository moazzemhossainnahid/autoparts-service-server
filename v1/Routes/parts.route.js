const express = require('express');
const partsController = require("../Controllers/parts.controller");
const verifyToken = require("../Middlewares/verifyToken");
const router = express.Router();


// publish a product
router.post("/", partsController.publishAProduct);

// get all products
router.get("/", partsController.getAllproducts);

// get single product
router.get("/:id", partsController.getSingleProduct);

// delete a product
router.delete("/:id", partsController.deleteAProduct);

// approve a product
router.put("/:id", partsController.approveAProduct);



module.exports = router;