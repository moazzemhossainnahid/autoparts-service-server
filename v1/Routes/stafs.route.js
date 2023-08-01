const express = require('express');
const stafsController = require("../Controllers/stafs.controller");
const verifyToken = require("../Middlewares/verifyToken");
const router = express.Router();


// add a service
router.post("/", stafsController.AddAStaf);

// get all service
router.get("/", stafsController.getAllStafs);

// get single service
router.get("/:id", stafsController.getSingleStaf);

// delete a service
router.delete("/:id", stafsController.deleteAStaf);



module.exports = router;