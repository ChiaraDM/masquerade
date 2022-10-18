const express = require("express");
const cors = require("cors");

const db = require('./db');

const api = express();

// Add standard middleware
api.use(express.json());
api.use(cors());

// Api routes

api.get("/", (req, res) => res.send("Masquerade API"));

module.exports = api;
