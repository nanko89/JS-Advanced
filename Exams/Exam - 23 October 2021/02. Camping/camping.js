class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp.hasOwnProperty(condition)) {
      throw new Error("Unsuccessful registration at the camp.");
    }

    if (this.listOfParticipants.find((p) => p.name === name)) {
      return `The ${name} is already registered at the camp.`;
    }

    if (money < this.priceForTheCamp[condition]) {
      return `The money is not enough to pay the stay at the camp.`;
    }

    this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
    return `The ${name} was successfully registered.`;
  }

  unregisterParticipant(name) {
    let currentParticipant = this.listOfParticipants.find(
      (p) => p.name === name
    );

    if (!currentParticipant) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }

    this.listOfParticipants = this.listOfParticipants.filter(
      (p) => p.name !== name
    );

    return `The ${name} removed successfully.`;
  }

  timeToPlay(typeOfGame, participant1, participant2) {
    if (typeOfGame === "WaterBalloonFights") {
      let firstPlayer = this.listOfParticipants.find(
        (p) => p.name === participant1
      );
      let secondPlayer = this.listOfParticipants.find(
        (p) => p.name === participant2
      );
      if (!firstPlayer || !secondPlayer) {
        throw new Error(`Invalid entered name/s.`);
      }
      if (firstPlayer.condition !== secondPlayer.condition) {
        throw new Error(`Choose players with equal condition.`);
      }

      if (firstPlayer.power > secondPlayer.power) {
        firstPlayer.wins++;
        return `The ${participant1} is winner in the game ${typeOfGame}.`;
      } else if (firstPlayer.power < secondPlayer.power) {
        secondPlayer.wins++;
        return `The ${participant2} is winner in the game ${typeOfGame}.`;
      } else {
        return `There is no winner.`;
      }
    } else if (typeOfGame === "Battleship") {
      let firstPlayer = this.listOfParticipants.find(
        (p) => p.name === participant1
      );
      if (!firstPlayer) {
        throw new Error(`Invalid entered name/s.`);
      }
      firstPlayer.power += 20;
      return `The ${participant1} successfully completed the game ${typeOfGame}.`;
    }
  }

  toString() {
    let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
    let sortedParticipants = this.listOfParticipants.sort(
      (a, b) => b.wins - a.wins
    );
    sortedParticipants.forEach(
      (p) => (result += `${p.name} - ${p.condition} - ${p.power} - ${p.wins}\n`)
    );

    return result.trim();
  }
}

// const summerCamp = new SummerCamp(
//   "Jane Austen",
//   "Pancharevo Sofia 1137, Bulgaria"
// );
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp(
//   "Jane Austen",
//   "Pancharevo Sofia 1137, Bulgaria"
// );
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp(
//   "Jane Austen",
//   "Pancharevo Sofia 1137, Bulgaria"
// );
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(
//   summerCamp.timeToPlay(
//     "WaterBalloonFights",
//     "Petar Petarson",
//     "Sara Dickinson"
//   )
// );
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(
//   summerCamp.timeToPlay(
//     "WaterBalloonFights",
//     "Petar Petarson",
//     "Dimitur Kostov"
//   )
// );

const summerCamp = new SummerCamp(
  "Jane Austen",
  "Pancharevo Sofia 1137, Bulgaria"
);
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(
//   summerCamp.timeToPlay(
//     "WaterBalloonFights",
//     "Petar Petarson",
//     "Sara Dickinson"
//   )
// );
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(
  summerCamp.timeToPlay(
    "WaterBalloonFights",
    "Petar Petarson",
    "Dimitur Kostov"
  )
);

console.log(summerCamp.toString());
