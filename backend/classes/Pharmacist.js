const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PharmacistSchema = Schema({
	firstname: { type: String, min: 3 },
	lastname: { type: String, min: 3 }
});

PharmacistSchema.statics.getAllPharmacists = async function() {
	return await this.find().sort({ lastname: 1 });
};

const Pharmacist = mongoose.model("pharmacist", PharmacistSchema);

module.exports = Pharmacist;
module.exports.PharmacistSchema = PharmacistSchema;
