const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000;

const ShiftSchema = Schema({
	startTime: Date,
	endTime: Date,
	pharmacyID: Schema.Types.ObjectId,
	pharmacistID: Schema.Types.ObjectId
});

ShiftSchema.statics.getShiftsByPharmacistID = async function(pharmacistID) {
	return await Shift.find({ pharmacistID });
};

ShiftSchema.statics.createShift = async function(
	startTime,
	endTime,
	pharmacyID,
	pharmacistID
) {
	const shift = new Shift({
		startTime,
		endTime,
		pharmacyID,
		pharmacistID
	});

	shift.save().then(() => {
		console.log("Save successful..");
	});
};

const Shift = mongoose.model("shift", ShiftSchema);

module.exports = Shift;
