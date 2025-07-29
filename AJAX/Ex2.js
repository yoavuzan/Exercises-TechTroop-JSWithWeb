// To Run This try : node .\Ex1.js 1440633908 [the ISBN number]

const queryType = "title";
const queryValue = "The Wise Man's Fears"
const url = `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data.items[0].volumeInfo.description);
  })
  .catch(error => {
    console.error('Error fetching book data:', error.message);
  });
