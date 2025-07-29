// Before converting
function getUserById(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("User not found");
      }
      return response.json();
    })
    .then((user) => {
      console.log(`Found user: ${user.name} (${user.email})`);
      return user;
    })
    .catch((error) => {
      console.error("Error fetching user:", error.message);
      return null;
    });
}

//after converting
async function getUserById(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.ok) {
      throw new Error("User not found");
    }

    const user = await response.json();
    console.log(`Found user: ${user.name} (${user.email})`);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
}

//test with valid id
for (let i = 1; i < 11; i++) {
  getUserById(i);
}
// test with invalid user
getUserById(999)