const express = require("express");
const bookingsController = require("../Controllers/bookings.controller");
const verifyToken = require("../Middlewares/verifyToken");
const router = express.Router();

// add a booking
router.post("/", verifyToken, bookingsController.saveABooking);

// get all bookings
router.get("/", bookingsController.getAllBookings);

// get single booking
router.get("/:id", verifyToken, bookingsController.getSingleBooking);

// delete a booking
router.delete("/:id", verifyToken, bookingsController.deleteABooking);

module.exports = router;
