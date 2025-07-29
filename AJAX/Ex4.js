const API_KEY = "yeywbSH4Hc6qi5yfogJQF7p9DwxVz91d";
const url = `https://api.giphy.com/v1/stickers/trending?api_key=${API_KEY}`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const embedUrl = data.data[0].embed_url;
    const gif = document.getElementById("gif");

    if (gif) {
      gif.setAttribute("src", embedUrl);
    } else {
      console.error("iframe with id 'gif' not found");
    }
  })
  .catch((error) => {
    console.error("Error fetching sticker data:", error.message);
  });
