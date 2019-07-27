const mongoose = require("mongoose");
const config = require("config");
const DB_USERNAME = config.get("db.username");
const DB_PASSWORD = config.get("db.password");
const express = require("express");
const app = express();
const home = require("./backend/routers/home");
const shifts = require("./backend/routers/shifts");
const pharmacists = require("./backend/routers/pharmacists");
const pharmacies = require("./backend/routers/pharmacies");
const PORT = process.env.PORT || 3000;

async function connectToBD() {
	return await mongoose.connect(
		`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@sablepharmacy-so7uj.mongodb.net/roster?retryWrites=true&w=majority`,
		{ useNewUrlParser: true, useFindAndModify: false }
	);
}

connectToBD().then(() => {
	console.log("Connected to DB...");
});

app.use(express.json());
app.use("/", home);
app.use("/api/shifts/", shifts);
app.use("/api/pharmacists/", pharmacists);
app.use("/api/pharmacies/", pharmacies);

app.listen(PORT, err => {
	if (err) throw err;
	console.log(`Listening on port ${PORT}...`);
});
