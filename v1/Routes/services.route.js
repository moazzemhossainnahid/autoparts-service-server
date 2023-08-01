const express = require('express');
const servicesController = require("../Controllers/services.controller");
const verifyToken = require("../Middlewares/verifyToken");
const router = express.Router();


// add a service
router.get("/", servicesController.AddAService);

// get all service
router.get("/", servicesController.getAllServices);

// get single service
router.get("/:id", servicesController.getSingleService);

// delete a service
router.delete("/:id", servicesController.deleteAService);



module.exports = router;