class Render {
  constructor(user) {
    this.user = user;
  }
  renderSearch() {
  const StocksList = document.querySelector("#StocksList");
  StocksList.innerHTML = ""; // clear previous
  const loading = document.querySelector("#loading");
  loading.style.display = "none"; 

  this.user.search.forEach((obj) => {
    const li = document.createElement("li");
    li.classList.add("stock-item");

    // Create stock logo
    const img = document.createElement("img");
    img.src = obj.logo || "default-logo.png"; // fallback if no logo
    img.alt = `${obj.name} logo`;
    img.className = "stock-logo";

    // Create link to company page
    const link = document.createElement("a");
    link.href = `company.html?symbol=${encodeURIComponent(obj.symbol)}`;
    link.target = "blank";
    link.textContent = `${obj.name} (${obj.symbol})`;
    link.className = "stock-name";

    // Create stock change percentage
    const change = document.createElement("span");
    change.textContent = `${obj.changePercent}%`;
    change.className = "stock-change";
    if (obj.changePercent > 0) {
      change.classList.add("up");
    } else if (obj.changePercent < 0) {
      change.classList.add("down");
    }

    // Append all to li
    li.appendChild(img);
    li.appendChild(link);
    li.appendChild(change);

    StocksList.appendChild(li);
  });
}
}
export default Render;
