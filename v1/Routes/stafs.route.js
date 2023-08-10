const express = require('express');
const stafsController = require("../Controllers/stafs.controller");
const verifyToken = require("../Middlewares/verifyToken");
const router = express.Router();


// add a staf
router.post("/", verifyToken, stafsController.AddAStaf);

// get all stafs
router.get("/", stafsController.getAllStafs);

// get single staf
router.get("/:id", verifyToken, stafsController.getSingleStaf);

// delete a staf
router.delete("/:id", verifyToken, stafsController.deleteAStaf);



module.exports = router;