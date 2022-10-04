function playingCards(face, suit) {
  let validFaces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  let validSuits = {
    S: "\u2660",
    C: "\u2663",
    H: "\u2665",
    D: "\u2666",
  };

  if (!validFaces.includes(face)) {
    throw new Error("Error");
  }

  if (!validSuits.hasOwnProperty(suit)) {
    throw new Error("Error");
  }

  return {
    face,
    suit,
    toString() {
      return this.face + validSuits[this.suit];
    },
  };
}

console.log(playingCards("A", "S").toString());
