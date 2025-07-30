import User from "./user.js";
import Render from "./render.js";
import { invokeAPI } from './handleAPI.js';
//document.getElementById("genarateUserBtn")

async function main() {
    
  const userData = await invokeAPI(); 
  const user = new User(userData);
  const renderer = new Render(user);
  renderer.renderAll();
}

main();
