//jshint es version:6
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.listen(3000, function() {
    console.log("Server up and running on port 3000.");
});