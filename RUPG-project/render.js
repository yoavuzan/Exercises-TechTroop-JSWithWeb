class Render {
  constructor(user) {
    this.user = user;
  }

  renderMainUser() {
    const mainUserSection = document.getElementById("mainUser");
    mainUserSection.innerHTML = `
      <h2>${this.user.getFullName()}</h2>
      <p>${this.user.getLocation()}</p>
      <img src=${this.user.photo}>
    `;
  }

  renderFriends() {
    const friendsList = document.querySelector("#friends");
    friendsList.innerHTML = ""; 

    this.user.friendsNames.forEach(friend => {
      const li = document.createElement("li");
      li.textContent = `${friend.firstName} ${friend.lastName}`;
      friendsList.appendChild(li);
    });
  }

  renderQuote() {
    const quoteSection = document.getElementById("favoQoute");
    quoteSection.innerHTML = `<p>${this.user.getQuote()}</p>`;
  }

  renderPokemon() {
    const pokeSection = document.getElementById("favoPoke");
    pokeSection.innerHTML = `
      <h3>Favorite Pokémon</h3>
      <p>${this.user.namePok}</p>
      <img src="${this.user.imgPok}" alt="${this.user.namePok}" width="100" />
    `;
  }

  renderAboutMe() {
    const aboutSection = document.getElementById("AboutMe");
    aboutSection.innerHTML = `<h3>About Me</h3><p>${this.user.aboutMe}</p>`;
  }

  renderAll() {
    this.renderMainUser();
    this.renderFriends();
    this.renderQuote();
    this.renderPokemon();
    this.renderAboutMe();
  }
}
export default Render;
