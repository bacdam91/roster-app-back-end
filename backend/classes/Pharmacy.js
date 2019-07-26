const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PharmacySchema = Schema({
	store: { type: String, min: 3 }
});

PharmacySchema.statics.getAllPharmacies = async function() {
	return await this.find();
};

const Pharmacy = mongoose.model("pharmacy", PharmacySchema);

module.exports = Pharmacy;
module.exports.PharmacySchema = PharmacySchema;
