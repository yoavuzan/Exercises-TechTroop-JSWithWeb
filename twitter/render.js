import Tweeter from "./model.js";

class Renderer {
  renderPosts(posts) {
    $("#posts").empty();

    for (let post of posts) {
      let postBox = $(`
      <div class="post" data-post-id="${post.id}">
        <div class="post-text">${post.text}</div>
        <div class="deletePost" data-post-id="${post.id}">Delete Post</div>
        <div class="comments">
        </div>
        <input type="text" class="comment-input" placeholder="Got something to say?">
        <button class="comment-button">Comment</button>
      </div>
    `);

      for (let comment of post.comments) {
        const commentHTML = `
        <div class="comment-container">
          <div class="comment" data-comment-id="${comment.id}">${comment.text}</div>
          <div class="delete-comment" data-comment-id="${comment.id}">X</div>
        </div>
      `;
        postBox.find(".comments").append(commentHTML);
      }

      $("#posts").append(postBox);
    }
  }
}
export default Renderer;

// const tweeter = new Tweeter();
// const renderer = new Renderer();
// renderer.renderPosts(tweeter.posts);
