const express = require("express");
const cors = require("cors");

const db = require('./db');

const api = express();

// Add standard middleware
api.use(express.json());
api.use(cors());

// Api routes

// GET REQUESTS
api.get("/", (req, res) => res.send("Masquerade API"));

api.get("/alien", async (req, res) => {
    const aliens = await db.query("SELECT * FROM alien");
    res.send(aliens.rows);
})

api.get("/alien/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await db.query("SELECT * FROM alien WHERE alien_id = $1", [id]);
    res.send(data.rows[0]);
})

api.get("/planet", async (req, res) => {
    const planets = await db.query("SELECT * FROM planet");
    res.send(planets.rows);
})

api.get("/location", async (req, res) => {
    const locations = await db.query("SELECT * FROM location");
    res.send(locations.rows);
})

api.get("/incident", async (req, res) => {
    const incidents = await db.query("SELECT * FROM incident");
    res.send(incidents.rows);
})

// POST REQUESTS
api.post("/alien", async (req, res) => {
    const alien = req.body;
    const data = await db.query(
        "INSERT INTO alien (alien_name, alien_colour, planet_id) VALUES ($1, $2, $3)", [alien[0].alien_name, alien[0].alien_colour, alien[0].planet_id]
        )
        console.log(data)
        res.status(200).send(data)
})

api.post("/location", async (req, res) => {
    const location = req.body;
    const data = await db.query(
        "INSERT INTO location (city_name, country_name VALUES ($1, $2)", [location[0].city_name, location[0].country_name]
    )   
    res.status(200).send(data)
})


module.exports = api;
