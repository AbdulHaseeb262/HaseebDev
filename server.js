require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Fetch all ads
app.get("/ads", (req, res) => {
  db.all("SELECT * FROM Ads", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Fetch all companies
app.get("/companies", (req, res) => {
  db.all("SELECT * FROM Companies", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Fetch all locations
app.get("/locations", (req, res) => {
  db.all("SELECT * FROM CompanyLocations", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Fetch all sale events
app.get("/sale-events", (req, res) => {
  db.all("SELECT * FROM SaleEvents", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Fetch all event details
app.get("/event-details", (req, res) => {
  db.all("SELECT * FROM EventDetails", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Fetch all products
app.get("/products", (req, res) => {
  db.all("SELECT * FROM Products", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
