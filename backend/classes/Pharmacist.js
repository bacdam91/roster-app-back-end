const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PharmacistSchema = Schema({
	firstname: { type: String, minLength: 3, required: true },
	lastname: { type: String, minLength: 3, required: true }
});

PharmacistSchema.statics.getAllPharmacists = async function() {
	return await this.find().sort({ lastname: 1 });
};

const Pharmacist = mongoose.model("pharmacist", PharmacistSchema);

module.exports = Pharmacist;
module.exports.PharmacistSchema = PharmacistSchema;
