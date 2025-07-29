const queryType = "title";
const queryValue = "The Wise Man's Fears";
const url = `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    data.items.forEach((item) => {
      if (item.volumeInfo.title && item.volumeInfo.authors[0]) {
        console.log(
          item.volumeInfo.title + " by : " + item.volumeInfo.authors[0]
        );
        item.volumeInfo.industryIdentifiers.forEach((item) => {
          if (item) {
            console.log("ISBN: " + item["identifier"]);
          }
        });
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching book data:", error.message);
  });
