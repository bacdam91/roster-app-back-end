const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000;

const ShiftSchema = Schema({
	startTime: { type: Date, required: true },
	endTime: { type: Date, required: true },
	pharmacyID: { type: Schema.Types.ObjectId, required: true },
	pharmacistID: { type: Schema.Types.ObjectId, required: true }
});

ShiftSchema.statics.getShiftsByPharmacistID = async function(pharmacistID) {
	return await Shift.find({ pharmacistID });
};

ShiftSchema.statics.createShift = async function(shiftData) {
	const shift = new Shift(shiftData);

	return shift.save();
};

const Shift = mongoose.model("shift", ShiftSchema);

module.exports = Shift;
