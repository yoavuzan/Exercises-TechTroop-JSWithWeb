import AutoCompleteTrie from "./AutoCompleteTrie.js";

const dic = new AutoCompleteTrie();

const addButton = document.querySelector("button");
const addInput = document.querySelector(".input-group input");
const suggestionInput = document.querySelector(".suggestions-input");
const counter = document.querySelector(".count");
const suggestionsList = document.getElementById("suggestions-list");
const MSG = document.getElementById("msg");

let countOfword = 0;

function addMsg(msg) {
  // Remove any existing <div> elements inside the form
  const existingMessages = MSG.querySelectorAll("div");
  existingMessages.forEach((p) => p.remove());
  
  const divMsg = document.createElement("div");
  divMsg.innerHTML = "</br>" + msg;
  MSG.appendChild(divMsg);
  MSG.style.display = "block";

  // Optionally hide after 2 seconds:
  setTimeout(() => {
    MSG.style.display = "none";
  }, 2000);
}

function handleAddCommand(word) {
  dic.addWord(word);
  addMsg(`Added '${word}' to the dictionary.`);
  countOfword++;
  updateCounter();
  addInput.value = "";
}

addButton.addEventListener("click", () => {
  const word = addInput.value.trim();
  if (word) {
    handleAddCommand(word);
  }
});

function handleCompleteCommand(prefix) {
  return dic.predictWords(prefix);
}

function showSuggestions(suggestions) {
  suggestionsList.innerHTML = "";
  if (suggestions.length === 0) return;

  suggestions.forEach((word) => {
    const li = document.createElement("li");
    li.textContent = word;
    li.addEventListener("click", () => {
      suggestionInput.value = word;
      suggestionsList.innerHTML = "";
    });
    suggestionsList.appendChild(li);
  });
}

suggestionInput.addEventListener("input", () => {
  const prefix = suggestionInput.value.toLowerCase();
  const suggestions = handleCompleteCommand(prefix);
  showSuggestions(suggestions);
});

function updateCounter() {
  counter.textContent = countOfword;
}
