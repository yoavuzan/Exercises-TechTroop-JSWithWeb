import CONFIG from "./config.js";

const queryParams = new URLSearchParams(window.location.search);
const symbol = queryParams.get("symbol");

const loading = document.getElementById("loading");
const loadingChart = document.getElementById("loadingChart");
const companyProfileDiv = document.getElementById("companyProfile");

if (!symbol) {
  loading.textContent = "No symbol found in URL.";
  loadingChart.style.display = "none";
  document.getElementById("chartContainer").style.display = "none";

}

if (!CONFIG.API_KEY) {
  loading.textContent = "Missing API key.";
  console.error("API key is missing in CONFIG.");
}
document.addEventListener("DOMContentLoaded", () => {
// Fetch company profile
fetch(`https://financialmodelingprep.com/api/v3/company/profile/${symbol}?apikey=${CONFIG.API_KEY}`)
  .then(res => res.json())
  .then(data => {
    loading.style.display = "none";

    if (!data || !data.profile) {
      companyProfileDiv.textContent = "Company profile not found.";
      return;
    }

    const profile = data.profile;
    const changeClass = profile.changesPercentage?.includes("-")
      ? "change-negative"
      : "change-positive";

    companyProfileDiv.innerHTML = `
      <img src="${profile.image}" alt="${profile.companyName} logo">
      <h2>${profile.companyName} (${symbol})</h2>
      <p>${profile.description}</p>
      <p><strong>Website:</strong> <a href="${profile.website}" target="_blank">${profile.website}</a></p>
      <p class="price">
        <strong>Price:</strong> $${profile.price} &nbsp;
        <span class="${changeClass}">${profile.changesPercentage}</span>
      </p>
    `;
  })
  .catch(err => {
    loading.textContent = "Error loading company data.";
    console.error(err);
  });

// Fetch and render historical stock price chart
fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?serietype=line&apikey=${CONFIG.API_KEY}`)
  .then(res => res.json())
  .then(data => {
    loadingChart.style.display = "none";

    if (!data || !data.historical || data.historical.length === 0) {
      document.getElementById("chartContainer").textContent = "No stock history data available.";
      return;
    }

    const labels = data.historical.map(item => item.date).reverse();
    const prices = data.historical.map(item => item.close).reverse();

    const ctx = document.getElementById("stockChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [{
          label: `Stock Price (${symbol})`,
          data: prices,
          borderColor: "#007bff",
          fill: false,
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            ticks: { maxTicksLimit: 10 }
          }
        }
      }
    });
  })
  .catch(err => {
    loadingChart.textContent = "Error loading chart.";
    console.error(err);
  });
});