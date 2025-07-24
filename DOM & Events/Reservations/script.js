const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const keys = Object.keys(reservations);
const names = ["Bob", "Ted", "Yossi", "BOB", "ted"];
const btn = document.getElementById("button");
console.log(btn)

function createP(msg){
    const p = document.createElement("p");
    p.innerHTML = msg
    document.getElementById("body").appendChild(p)
}

function checkReservation() {
  for (const name of names) {
    let memo;
    for (const key of keys) {
      if (key.toUpperCase() === name.toUpperCase()) {
        memo = key;
        break;
      }
    }
    if (reservations[memo]) {
      if (!reservations[memo].claimed) {
        createP("welcome " + name);
      } else {
        createP("Hmm, someone already claimed this reservation");
      }
    } else {
      createP("You have no reservation");
      reservations[memo] = { claimed: true };
    }
  }
};


btn.onclick = checkReservation;