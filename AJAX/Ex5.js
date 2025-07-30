const API_KEY = "";

document.getElementById("searchBtn").addEventListener("click", () => {
  const search = document.getElementById("searchTxt").value.trim();

  if (!search) {
    console.log("The search is empty");
    return;
  }

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(search)}&api_key=${API_KEY}&limit=1`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const embedUrl = data.data[0]?.embed_url;

      if (!embedUrl) {
        console.error("No GIF found for the search term");
        return;
      }

      const gif = document.getElementById("gif");

      if (gif) {
        gif.setAttribute("src", embedUrl);
      } else {
        console.error("iframe with id 'gif' not found");
      }
    })
    .catch((error) => {
      console.error("Error fetching GIF data:", error.message);
    });
});
