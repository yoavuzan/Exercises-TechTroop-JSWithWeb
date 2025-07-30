import User from "./user.js";
import Render from "./render.js";
import { invokeAPI } from "./handleAPI.js";

async function generateUser() {
  try {
    const userData = await invokeAPI();
    const user = new User(userData);
    const renderer = new Render(user);
    renderer.renderAll();
  } catch (err) {
    
  }
}
document
  .getElementById("genarateUserBtn")
  .addEventListener("click", generateUser);

async function main() {
  generateUser();
}

main();
