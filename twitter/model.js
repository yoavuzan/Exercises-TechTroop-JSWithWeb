class Tweeter {
  constructor() {
    this.postIdCounter = 3;
    this.commentIdCounter = 7;
    this.posts = [
      {
        text: "First post!",
        id: "p1",
        comments: [
          { id: "c1", text: "First comment on first post!" },
          { id: "c2", text: "Second comment on first post!!" },
          { id: "c3", text: "Third comment on first post!!!" },
        ],
      },
      {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
          {
            id: "c4",
            text: "Don't worry second poster, you'll be first one day.",
          },
          { id: "c5", text: "Yeah, believe in yourself!" },
          { id: "c6", text: "Haha second place what a joke." },
        ],
      },
    ];
  }
  getPosts() {
    return this.posts;
  }
  addPost(textp) {
    this.posts.push({
      text: textp,
      id: String("p" + this.postIdCounter++),
      comments: [],
    });
  }
  removePost(postID) {
    this.posts = this.posts.filter((post) => post.id !== postID);
  }
  addComment(postID, textc) {
    const post = this.posts.find((post) => post.id === postID);
    if (post)
      post.comments.push({
        id: String("c" + this.commentIdCounter++),
        text: textc,
      });
  }
  removeComment(postID, commentID) {
    let post = this.posts.find((post) => post.id === postID);
    if (post) {
      post.comments = post.comments.filter(
        (comment) => comment.id !== commentID
      );
    }
  }
}
export default Tweeter;


// const tweeter = new Tweeter();

// // Test adding a post
// tweeter.addPost("This is my own post!");
// console.log(tweeter.getPosts());
// // Should add: {text: "This is my own post!", id: "p3", comments: []}

// // Test removing a post
// tweeter.removePost("p1");
// console.log(tweeter.getPosts());
// // Should only have two posts left

// // Test adding comments
// tweeter.addComment("p3", "Damn straight it is!");
// tweeter.addComment("p2", "Second the best!");
// console.log(tweeter.getPosts());

// // Test removing comments
// tweeter.removeComment("p2", "c6");
// console.log(tweeter.getPosts());
