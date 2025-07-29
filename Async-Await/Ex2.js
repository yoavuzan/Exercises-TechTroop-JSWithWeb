// Starter code structure:
function checkResponse(response, obj) {
  if (!response.ok) {
    throw new Error(`${obj} not found`);
  }
}
async function getUserWithPosts(userId) {
  // Your implementation here
  // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
  // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
  // 3. Return combined data
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    checkResponse(response, "User");

    const user = await response.json();
    const response2 = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    checkResponse(response2, "Posts");

    const posts = await response2.json();

    return { user, posts };
  } catch (err) {
    console.error("Error fetching user:", err.message);
    return null;
  }
}

//test
getUserWithPosts(1)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });
