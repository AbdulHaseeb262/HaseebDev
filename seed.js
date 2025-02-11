const db = require("./database");

// Insert sample companies
const companies = [
  { CompanyName: "Express Home Labs and IV", WebsiteLink: null, Email: null },
  { CompanyName: "Velvet Effect Electrolysis", WebsiteLink: null, Email: null },
  {
    CompanyName: "Community Leasing",
    WebsiteLink: null,
    Email: "info@communityleasing.net",
  },
];

companies.forEach((company) => {
  db.run(
    `INSERT OR IGNORE INTO Companies (CompanyName, WebsiteLink, Email) VALUES (?, ?, ?)`,
    [company.CompanyName, company.WebsiteLink, company.Email],
    (err) => {
      if (err) console.error(err.message);
    }
  );
});

// Insert sample locations
const locations = [
  { CompanyID: 1, Address: "Not specified", Phone: "347-723-7707" },
  { CompanyID: 2, Address: "Bates Area", Phone: "845-803-0142" },
];

locations.forEach((location) => {
  db.run(
    `INSERT OR IGNORE INTO CompanyLocations (CompanyID, Address, Phone) VALUES (?, ?, ?)`,
    [location.CompanyID, location.Address, location.Phone],
    (err) => {
      if (err) console.error(err.message);
    }
  );
});

// Insert sample sale events
const saleEvents = [
  {
    Title: "Black Friday Sale",
    Description: "Huge discounts on all products!",
    SaleType: "Retail Sale",
    Category: "Shopping",
    DiscountPercentage: "50%",
    SpecialPromotions: "Buy one, get one free",
    EventDate: "2024-11-29",
    EventTime: "08:00 AM",
    Location: "Main Street",
    ContactInfo: "info@blackfridaysale.com",
  },
];

saleEvents.forEach((event) => {
  db.run(
    `INSERT OR IGNORE INTO SaleEvents (Title, Description, SaleType, Category, DiscountPercentage, SpecialPromotions, EventDate, EventTime, Location, ContactInfo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      event.Title,
      event.Description,
      event.SaleType,
      event.Category,
      event.DiscountPercentage,
      event.SpecialPromotions,
      event.EventDate,
      event.EventTime,
      event.Location,
      event.ContactInfo,
    ],
    (err) => {
      if (err) console.error(err.message);
    }
  );
});

// Insert sample event details
const eventDetails = [
  {
    EventIDSubquery:
      "SELECT EventID FROM SaleEvents WHERE Title = 'Black Friday Sale'",
    Organizer: "Chany Felberbaum",
    EventFormat: "Virtual Summit",
    RegistrationLink: "http://www.chanyfelberbaum.com/summit",
    ContactInfo:
      "support@rapidrecoverycoaching.com | Text register to 646-979-0710",
    Speakers: "Dina Friedman, Shterna Ginsberg, ...",
    TopicsCovered: "IFS, EFT, Breathwork, ...",
  },
];

eventDetails.forEach((detail) => {
  db.run(
    `INSERT OR IGNORE INTO EventDetails (EventID, Organizer, EventFormat, RegistrationLink, ContactInfo, Speakers, TopicsCovered) 
     VALUES ((${detail.EventIDSubquery}), ?, ?, ?, ?, ?, ?)`,
    [
      detail.Organizer,
      detail.EventFormat,
      detail.RegistrationLink,
      detail.ContactInfo,
      detail.Speakers,
      detail.TopicsCovered,
    ],
    (err) => {
      if (err) console.error("EventDetails error:", err.message);
    }
  );
});

console.log("Data inserted!");
