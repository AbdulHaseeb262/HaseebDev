const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to the database.");
  }
});

// Create Companies Table
db.run(`CREATE TABLE IF NOT EXISTS Companies (
    CompanyID INTEGER PRIMARY KEY AUTOINCREMENT,
    CompanyName TEXT NOT NULL UNIQUE,
    WebsiteLink TEXT,
    Email TEXT
)`);

// Create Company Locations Table
db.run(`CREATE TABLE IF NOT EXISTS CompanyLocations (
    LocationID INTEGER PRIMARY KEY AUTOINCREMENT,
    CompanyID INTEGER REFERENCES Companies(CompanyID) ON DELETE CASCADE,
    Address TEXT NOT NULL,
    Phone TEXT NOT NULL
)`);

// Create Ads Table
db.run(`CREATE TABLE IF NOT EXISTS Ads (
    AdID INTEGER PRIMARY KEY AUTOINCREMENT,
    Title TEXT NOT NULL,
    Description TEXT NOT NULL,
    AdType TEXT NOT NULL CHECK (AdType IN ('Business Advertisement', 'Event Advertisement', 'Sale Advertisement', 'Classified Ad')),
    CompanyName TEXT,
    Phone TEXT,
    Owner TEXT,
    PropertyLocation TEXT,
    Price TEXT DEFAULT 'Not applicable',
    Rate TEXT DEFAULT 'Not applicable',
    PromoTag TEXT,
    ExpirationDate DATE,
    WebsiteLink TEXT,
    Instagram TEXT,
    Email TEXT,
    ServiceArea TEXT DEFAULT 'Not specified',
    CompanyID INTEGER REFERENCES Companies(CompanyID) ON DELETE CASCADE
)`);

// Create Sale Events Table
db.run(`CREATE TABLE IF NOT EXISTS SaleEvents (
    EventID INTEGER PRIMARY KEY AUTOINCREMENT,
    Title TEXT NOT NULL,
    Description TEXT NOT NULL,
    SaleType TEXT NOT NULL,
    Category TEXT NOT NULL,
    DiscountPercentage TEXT,
    SpecialPromotions TEXT,
    EventDate DATE NULL,
    EventTime TEXT,
    Location TEXT NOT NULL,
    ContactInfo TEXT
)`);

// Create Event Details Table
db.run(`CREATE TABLE IF NOT EXISTS EventDetails (
    EventDetailID INTEGER PRIMARY KEY AUTOINCREMENT,
    EventID INTEGER REFERENCES SaleEvents(EventID) ON DELETE CASCADE,
    Organizer TEXT,
    EventFormat TEXT,
    RegistrationLink TEXT,
    ContactInfo TEXT,
    Speakers TEXT,
    TopicsCovered TEXT
)`);

// Create Products Table
db.run(`CREATE TABLE IF NOT EXISTS Products (
    ProductID INTEGER PRIMARY KEY AUTOINCREMENT,
    ProductName TEXT NOT NULL,
    Manufacturer TEXT NOT NULL,
    ProductType TEXT NOT NULL,
    Description TEXT NOT NULL,
    Benefits TEXT,
    Ingredients TEXT,
    Certifications TEXT,
    RetailAvailability TEXT
)`);

module.exports = db;
