const express = require('express');
const partsController = require("../Controllers/parts.controller");
const verifyToken = require("../Middlewares/verifyToken");
const router = express.Router();


// add a part
router.post("/", verifyToken, partsController.addAPart);

// get all parts
router.get("/", partsController.getAllParts);

// get single part
router.get("/:id", verifyToken, partsController.getSinglePart);

// delete a part
router.delete("/:id", verifyToken, partsController.deleteAPart);



module.exports = router;