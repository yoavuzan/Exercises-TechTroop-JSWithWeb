import User from "./user.js";
import Render from "./render.js";
import { invokeAPI } from "./handleAPI.js";

document
  .getElementById("genarateUserBtn")
  .addEventListener("click", async function () {
    try{
    const userData = await invokeAPI();
    const user = new User(userData);
    const renderer = new Render(user);
    renderer.renderAll();}catch(err){

    }
  });

async function main() {
  try{
  const userData = await invokeAPI();
  const user = new User(userData);
  const renderer = new Render(user);
  renderer.renderAll();}catch(err){
    
  }
}

main();
