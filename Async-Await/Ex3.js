function checkResponse(response, obj) {
  if (!response.ok) {
    throw new Error(`${obj} not found`);
  }
}

async function fetchAndParse(...urls) {
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  responses.forEach((res, i) => checkResponse(res, `Resource ${i + 1}`));
  return Promise.all(responses.map((res) => res.json()));
}

function calculateSummary(users, posts, comments) {
  const totalUsers = users.length;
  const totalPosts = posts.length;
  const totalComments = comments.length;

  return {
    totalUsers,
    totalPosts,
    totalComments,
    avgPostsPerUser: totalPosts / totalUsers,
    avgCommentsPerPost: totalComments / totalPosts,
  };
}

function getTopUsers(users, posts, comments, topN = 3) {
  const postCounts = {};
  const commentCounts = {};

  posts.forEach((post) => {
    postCounts[post.userId] = (postCounts[post.userId] || 0) + 1;
  });

  posts.forEach((post) => {
    const commentCount = comments.filter((c) => c.postId === post.id).length;
    commentCounts[post.userId] =
      (commentCounts[post.userId] || 0) + commentCount;
  });

  return users
    .map((user) => ({
      name: user.name,
      postCount: postCounts[user.id] || 0,
      commentCount: commentCounts[user.id] || 0,
    }))
    .sort((a, b) => b.postCount - a.postCount)
    .slice(0, topN);
}

function getRecentPosts(posts, count = 5) {
  return posts.sort((a, b) => b.id - a.id).slice(0, count);
}

async function dashboard() {
  try {
    const baseUrl = "https://jsonplaceholder.typicode.com/";
    const [users, posts, comments] = await fetchAndParse(
      baseUrl + "users",
      baseUrl + "posts",
      baseUrl + "comments"
    );

    return {
      summary: calculateSummary(users, posts, comments),
      topUsers: getTopUsers(users, posts, comments),
      recentPosts: getRecentPosts(posts),
    };
  } catch (err) {
    console.error("Error in dashboard:", err.message);
    return null;
  }
}
dashboard().then((data) => console.log(data));
