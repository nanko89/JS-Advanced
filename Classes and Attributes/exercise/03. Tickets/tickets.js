function tickets(arr, criterion) {
  let allTickets = [];

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  for (const tic of arr) {
    let token = tic.split("|");
    let destination = token[0];
    let price = Number(token[1]);
    let status = token[2];

    allTickets.push(new Ticket(destination, price, status));
  }

  let sortTicket =
    criterion !== "price"
      ? allTickets.sort((a, b) => a[criterion].localeCompare(b[criterion]))
      : allTickets.sort((a, b) => a.criterion - b.criterion);
  return sortTicket;
}

console.log(
  tickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "price"
  )
);
