class SummerCapm {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp.hasOwnProperty(condition)) {
      return new Error("Unsuccessful registration at the camp.");
    }

    
  }
}
