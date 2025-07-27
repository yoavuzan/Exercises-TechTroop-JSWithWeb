import Tweeter from "./model.js";
import Renderer from "./render.js";

$("#posts").on("click", ".deletePost", function () {
  const postId = $(this).data("post-id");
  tweeter.removePost(postId);
  renderer.renderPosts(tweeter.posts);
});

$("#posts").on("click", ".delete-comment", function () {
  const commentId = $(this).data("comment-id");
  const postId = $(this).closest(".post").data("post-id");
  console.log(postId, commentId);
  tweeter.removeComment(postId, commentId);
  renderer.renderPosts(tweeter.posts);
});

$("#twitt").on("click", function () {
  const text = $("#post-text").val();
  if (text) {
    tweeter.addPost(text);
    renderer.renderPosts(tweeter.posts);
  }
});

$("#posts").on("click", ".comment-button", function () {
  const post = $(this).closest(".post");
  const postId = post.data("post-id");
  const text = post.find(".comment-input").val().trim();

  if (text) {
    tweeter.addComment(postId, text);
    renderer.renderPosts(tweeter.posts);
  }
});

const renderer = new Renderer();
const tweeter = new Tweeter();
renderer.renderPosts(tweeter.posts);
