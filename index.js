const mongoose = require("mongoose");
const config = require("config");
const DB_USERNAME = config.get("db.username");
const DB_PASSWORD = config.get("db.password");

async function connectToBD() {
	return await mongoose.connect(
		`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@sablepharmacy-so7uj.mongodb.net/roster?retryWrites=true&w=majority`,
		{ useNewUrlParser: true }
	);
}

connectToBD().then(() => {
	console.log("Connected to DB...");
});
