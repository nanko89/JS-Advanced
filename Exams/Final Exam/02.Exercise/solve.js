class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    for (const player of footballPlayers) {
      let [name, age, playerValue] = player.split("/");
      age = Number(age);
      playerValue = Number(playerValue);

      if (!this.invitedPlayers.find((p) => p.name === name)) {
        this.invitedPlayers.push({ name, age, playerValue });
      }
      let currenPlayer = this.invitedPlayers.find((p) => p.name === name);
      if (currenPlayer.age < age) {
        currenPlayer.age = age;
      }
    }
    return `You successfully invite ${this.invitedPlayers
      .map((p) => p.name)
      .join(", ")}.`;
  }

  signContract(selectedPlayer) {
    let [name, playerOffer] = selectedPlayer.split("/");

    let currentPlayer = this.invitedPlayers.find((p) => p.name === name);

    if (!currentPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (currentPlayer.playerValue > playerOffer) {
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${name}, ${
          currentPlayer.playerValue - Number(playerOffer)
        } million more are needed to sign the contract!`
      );
    }

    currentPlayer.playerValue = "Bought";

    return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
  }

  ageLimit(name, age) {
    let currentPlayer = this.invitedPlayers.find((p) => p.name === name);

    if (!currentPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    let ageDiff = age - currentPlayer.age;

    if (ageDiff <= 0) {
      return `${name} is above age limit!`;
    } else if (ageDiff < 5) {
      return `${name} will sign a contract for ${ageDiff} years with ${this.clubName} in ${this.country}!`;
    } else {
      return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
    }
  }
  transferWindowResult() {
    let result = "Players list:\n";
    let sortPlayersByName = this.invitedPlayers.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    sortPlayersByName.forEach(
      (p) => (result += `Player ${p.name}-${p.playerValue}\n`)
    );
    return result.trim();
  }
}

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(
//   fTeam.newAdditions([
//     "Kylian Mbappé/23/160",
//     "Lionel Messi/35/50",
//     "Pau Torres/25/52",
//     "Kylian Mbappé/25/160",
//   ])
// );

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(
//   fTeam.newAdditions([
//     "Kylian Mbappé/23/160",
//     "Lionel Messi/35/50",
//     "Pau Torres/25/52",
//   ])
// );
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(
//   fTeam.newAdditions([
//     "Kylian Mbappé/23/160",
//     "Lionel Messi/35/50",
//     "Pau Torres/25/52",
//   ])
// );
// console.log(fTeam.ageLimit("Lionel Messi", 33));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(
  fTeam.newAdditions([
    "Kylian Mbappé/23/160",
    "Lionel Messi/35/50",
    "Pau Torres/25/52",
  ])
);
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
