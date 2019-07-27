const express = require("express");
const router = express.Router();
const Shift = require("../classes/Shift");

router.get("/", async (req, res) => {
	const results = await Shift.find();
	res.send(results);
});

router.get("/:id", async (req, res) => {
	const shiftID = req.params.id;
	const result = await Shift.findById(shiftID);
	res.send(result);
});

router.post("/", async (req, res) => {
	const shiftData = req.body;
	const result = await Shift.createShift(shiftData);
	res.send(result);
});

router.put("/:id", async (req, res) => {
	const shiftID = req.params.id;
	const shiftData = req.body;
	const result = await Shift.findByIdAndUpdate(
		shiftID,
		{ $set: shiftData },
		{ new: true }
	);
	res.send(result);
});

router.delete("/:id", async (req, res) => {
	const shiftID = req.params.id;
	const result = await Shift.findByIdAndDelete(shiftID);
	res.send(result);
});

module.exports = router;
