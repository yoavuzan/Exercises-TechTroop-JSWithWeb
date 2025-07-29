// To Run This try : node .\Ex1.js 1440633908 [the ISBN number]

const ISBN = process.argv[2];
const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data.items[0].volumeInfo.title);
  })
  .catch(error => {
    console.error('Error fetching book data:', error.message);
  });
