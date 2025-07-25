const posts = [
  {
    name: "Uncle Jerome",
    text: "Happy birthday kido!",
  },
  {
    name: "BFF Charlene",
    text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD",
  },
  {
    name: "Old High School Teacher",
    text: "Hey ace, have a good one.",
  },
];

const render = function () {
  $("#withes").empty();
  for (let post of posts) {
    let postBox = $(
      "<div class='post-box'><p class=name>" +
        post.name +
        " : " +
        post.text +
        "</p></div>"
    );
    $("#withes").append(postBox);
  }
};

$(".post").on("click", function () {
  const Name = $(".name").val();
  const wish = $(".wish").val();
  //if (Name != "" && wish != "") {
  posts.push({ name: Name, text: wish });
  render();
  //}
});

render();
