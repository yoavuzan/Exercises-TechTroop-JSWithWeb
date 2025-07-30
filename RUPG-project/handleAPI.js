import User from "./user.js";

function checkResponse(response, apiName) {
  if (!response.ok) {
    throw new Error(`${apiName} not found`);
  }
}

async function fetchData(url, nameApi) {
  const response = await fetch(url);
  checkResponse(response, nameApi);
  const data = await response.json();
  return data;
}

function handleUrlUsers(countOfUsers, withLocAndPic = false) {
  let url = `https://randomuser.me/api/?results=${countOfUsers}&inc=name`;
  if (withLocAndPic) {
    url += ",location,picture";
  }
  return url + "&noinfo";
}

function makeMainUser(userData, friends) {
  const firstName = userData.name.first;
  const lastName = userData.name.last;
  const city = userData.location.city;
  const state = userData.location.state;
  const photo = userData.picture.large;

  return {
    firstName,
    lastName,
    city,
    state,
    photo,
    friendsNames: friends,
  };
}

function makeFriendsList(friendsData) {
  const friendsNames = friendsData.map((friend) => ({
    firstName: friend.name.first,
    lastName: friend.name.last,
  }));
  return friendsNames;
}

async function generateUser() {
  const mainUserResponse = await fetchData(handleUrlUsers(1, true), "UsersAPI");
  const mainUserData = mainUserResponse.results;

  const friendsResponse = await fetchData(handleUrlUsers(6, false), "UsersAPI");
  const friendsData = friendsResponse.results;

  const friends = makeFriendsList(friendsData);
  const mainUser = makeMainUser(mainUserData[0], friends);

  return mainUser;
}

async function generateQuote() {
  const quote = await fetchData("https://api.kanye.rest", "QuoteAPI");
  return quote;
}
async function generatePokemon() {
  const id = Math.floor(Math.random() * 954 + 1);
  const pokemon = await fetchData(`https://pokeapi.co/api/v2/item/${id}`);
  return { namePok: pokemon.name, imgPok: pokemon.sprites.default };
}

export async function invokeAPI() {
  const mainUser = await generateUser();
  const quote = await generateQuote();
  const pokemon = await generatePokemon();

  return { ...mainUser, ...quote, ...pokemon };
}


