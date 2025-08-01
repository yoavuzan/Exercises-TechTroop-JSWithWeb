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

      const link = document.createElement("a");
      link.href = `company.html?symbol=${encodeURIComponent(obj.symbol)}`
      link.target ="blank"
      link.textContent = `${obj.name} (${obj.symbol})`;

      li.appendChild(link);
      StocksList.appendChild(li);
    });
  }
}
export default Render;
