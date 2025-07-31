import User from "./model.js";
import Render from "./render.js";
import { invokeSearchAPIs } from "./api.js";

const user = new User();
const render = new Render(user);

const input = document.getElementById("searchTxt");
const button = document.getElementById("searchBtn");

input.addEventListener("click", () => {
  // clear the input
  input.value = "";
});

button.addEventListener(
  "click",
  /*async*/ () => {
    //const search = await invokeSearchAPIs(input.value);
    const search = invokeSearchAPIs(input.value);
    user.setSearch(search);
    render.renderSearch();
  }
);
