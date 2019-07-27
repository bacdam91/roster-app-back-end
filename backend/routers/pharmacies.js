const express = require("express");
const router = express.Router();
const Pharmacy = require("../classes/Pharmacy");

router.get("/", async (req, res) => {
	const results = await Pharmacy.find();
	res.send(results);
});

router.get("/:id", async (req, res) => {
	const pharmacyID = req.params.id;
	const result = await Pharmacy.findById(pharmacyID);
	res.send(result);
});

router.post("/", async (req, res) => {
	const pharmacyData = req.body;
	const pharmacy = new Pharmacy(pharmacyData);
	const result = await pharmacy.save();
	res.send(result);
});

router.delete("/:id", async (req, res) => {
	const pharmacyID = req.params.id;
	const result = await Pharmacy.findByIdAndDelete(pharmacyID);
	res.send(result);
});

router.put("/:id", async (req, res) => {
	const pharmacyID = req.params.id;
	const pharmacyData = req.body;
	const result = await Pharmacy.findByIdAndUpdate(
		pharmacyID,
		{ $set: pharmacyData },
		{ new: true }
	);
	res.send(result);
});

module.exports = router;
