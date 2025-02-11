// When the DOM is loaded, fetch all data
document.addEventListener("DOMContentLoaded", () => {
  loadAds();
  loadCompanies();
  loadLocations();
  loadSaleEvents();
  loadEventDetails();
  loadProducts();
});

// Base URL for your backend API
const BASE_URL = "http://localhost:5000";

// Function to load Ads
function loadAds() {
  fetch(`${BASE_URL}/ads`)
    .then((response) => response.json())
    .then((ads) => {
      const tbody = document.getElementById("ads-data");
      tbody.innerHTML = ""; // Clear any existing rows
      ads.forEach((ad) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${ad.AdID || ad.id}</td>
            <td>${ad.Title || ad.title}</td>
            <td>${ad.Description || ad.description}</td>
            <td>${ad.AdType || ad.adType}</td>
            <td>${ad.CompanyName || ad.company_name}</td>
            <td>${ad.Phone || ad.phone || "—"}</td>
          `;
        tbody.appendChild(tr);
      });
    })
    .catch((error) => console.error("Error loading ads:", error));
}

// Function to load Companies
function loadCompanies() {
  fetch(`${BASE_URL}/companies`)
    .then((response) => response.json())
    .then((companies) => {
      const tbody = document.getElementById("companies-data");
      tbody.innerHTML = "";
      companies.forEach((company) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${company.CompanyID || company.id}</td>
            <td>${company.CompanyName || company.company_name}</td>
            <td>${company.WebsiteLink || company.website || "—"}</td>
            <td>${company.Email || company.email || "—"}</td>
          `;
        tbody.appendChild(tr);
      });
    })
    .catch((error) => console.error("Error loading companies:", error));
}

// Function to load Company Locations
function loadLocations() {
  fetch(`${BASE_URL}/locations`)
    .then((response) => response.json())
    .then((locations) => {
      const tbody = document.getElementById("locations-data");
      tbody.innerHTML = "";
      locations.forEach((loc) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${loc.LocationID || loc.id}</td>
            <td>${loc.CompanyID || loc.company_id || "—"}</td>
            <td>${loc.Address || loc.address}</td>
            <td>${loc.Phone || loc.phone}</td>
          `;
        tbody.appendChild(tr);
      });
    })
    .catch((error) => console.error("Error loading locations:", error));
}

// Function to load Sale Events
function loadSaleEvents() {
  fetch(`${BASE_URL}/sale-events`)
    .then((response) => response.json())
    .then((events) => {
      const tbody = document.getElementById("sale-events-data");
      tbody.innerHTML = "";
      events.forEach((event) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${event.EventID || event.id}</td>
            <td>${event.Title || event.title}</td>
            <td>${event.Description || event.description}</td>
            <td>${event.SaleType || event.saleType}</td>
            <td>${event.Category || event.category}</td>
            <td>${event.DiscountPercentage || event.discount || "—"}</td>
            <td>${event.EventDate || event.eventDate || "—"}</td>
          `;
        tbody.appendChild(tr);
      });
    })
    .catch((error) => console.error("Error loading sale events:", error));
}

// Function to load Event Details
function loadEventDetails() {
  fetch(`${BASE_URL}/event-details`)
    .then((response) => response.json())
    .then((details) => {
      const tbody = document.getElementById("event-details-data");
      tbody.innerHTML = "";
      details.forEach((detail) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${detail.EventDetailID || detail.id}</td>
            <td>${detail.EventID || detail.eventID}</td>
            <td>${detail.Organizer || detail.organizer}</td>
            <td>${detail.EventFormat || detail.eventFormat}</td>
            <td><a href="${
              detail.RegistrationLink || detail.registrationLink
            }" target="_blank">${detail.RegistrationLink || "Link"}</a></td>
            <td>${detail.Speakers || detail.speakers}</td>
          `;
        tbody.appendChild(tr);
      });
    })
    .catch((error) => console.error("Error loading event details:", error));
}

// Function to load Products
function loadProducts() {
  fetch(`${BASE_URL}/products`)
    .then((response) => response.json())
    .then((products) => {
      const tbody = document.getElementById("products-data");
      tbody.innerHTML = "";
      products.forEach((product) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${product.ProductID || product.id}</td>
            <td>${product.ProductName || product.productName}</td>
            <td>${product.Manufacturer || product.manufacturer}</td>
            <td>${product.ProductType || product.productType}</td>
            <td>${product.Description || product.description}</td>
          `;
        tbody.appendChild(tr);
      });
    })
    .catch((error) => console.error("Error loading products:", error));
}
