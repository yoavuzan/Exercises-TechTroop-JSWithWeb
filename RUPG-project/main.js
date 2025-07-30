import User from "./user.js";
import Render from "./render.js";
import { invokeAPIs } from "./handleAPI.js";

async function generateUser() {
  try {
    const userData = await invokeAPIs();
    const user = new User(userData);
    const renderer = new Render(user);
    renderer.renderAll();
  } catch (err) {
    const renderer = new Render();
    renderer.renderError(err);
  }
}

document
  .getElementById("genarateUserBtn")
  .addEventListener("click", generateUser);

async function main() {
  generateUser();
}

main();
