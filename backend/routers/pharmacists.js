const express = require("express");
const router = express.Router();
const Pharmacist = require("../classes/Pharmacist");

router.get("/", async (req, res) => {
	const results = await Pharmacist.find().sort({ lastname: 1 });
	res.send(results);
});

router.get("/:id", async (req, res) => {
	const pharmacistID = req.params.id;
	const result = await Pharmacist.findById(pharmacistID);
	res.send(result);
});

router.post("/", async (req, res) => {
	const pharmacistData = req.body;
	const pharmacist = new Pharmacist(pharmacistData);
	const result = await pharmacist.save();
	res.send(result);
});

router.delete("/:id", async (req, res) => {
	const pharmacistID = req.params.id;
	const result = await Pharmacist.findByIdAndDelete(pharmacistID);
	res.send(result);
});

router.put("/:id", async (req, res) => {
	const pharmacistID = req.params.id;
	const pharmacistData = req.body;
	const result = await Pharmacist.findByIdAndUpdate(
		pharmacistID,
		{ $set: pharmacistData },
		{ new: true }
	);
	res.send(result);
});

module.exports = router;
