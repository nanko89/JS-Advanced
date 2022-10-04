function deckOfCarts(array) {
  let result = "";
  let outPut = [];
  for (const currentCart of array) {
    let token = currentCart.split("");
    let face;
    let suit;
    if (token.length === 3) {
      face = token[0] + token[1];
      suit = token[2];
    } else if (token.length === 2) {
      face = token[0];
      suit = token[1];
    } else {
      throw new Error(`Invalid card: ${currentCart}`);
    }

    try {
      let cart = playingCards(face, suit).toString();
      outPut.push(cart);
    } catch (error) {
      return console.log(error.message);
    }
  }

  result = outPut.join(" ");
  console.log(result);

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
      throw new Error(`Invalid card: ${face}${suit}`);
    }

    if (!validSuits.hasOwnProperty(suit)) {
      throw new Error(`Invalid card: ${face}${suit}`);
    }
    return face + validSuits[suit];
  }
}

deckOfCarts(["AS", "10D", "KH", "2C"]);
deckOfCarts(["5S", "3D", "QD", "1C"]);
