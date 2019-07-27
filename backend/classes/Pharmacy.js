const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PharmacySchema = Schema({
	store: { type: String, minLength: 3, required: true }
});

PharmacySchema.statics.getAllPharmacies = async function() {
	return await this.find();
};

const Pharmacy = mongoose.model("pharmacy", PharmacySchema);

module.exports = Pharmacy;
module.exports.PharmacySchema = PharmacySchema;
