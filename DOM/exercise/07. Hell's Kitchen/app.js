function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let input = JSON.parse(document.querySelector("#inputs textarea").value);
    let restaurants = {};

    let maxAvgSalary = 0;
    let bestRestaurantName = "";

    for (let res of input) {
      let [name, workers] = res.split(" - ");

      if (!restaurants.hasOwnProperty(name)) {
        restaurants[name] = {};
      }

      workers = workers.split(", ");
      for (let worker of workers) {
        let [workerName, salary] = worker.split(" ");

        restaurants[name][workerName] = Number(salary);
      }
    }

    for (const restaurant of Object.entries(restaurants)) {
      let name = restaurant[0];
      let values = restaurant[1];
      let currentAvgSalary = 0;
      let workerCount = Object.values(values).length;
      for (const salary of Object.values(values)) {
        currentAvgSalary += salary;
      }
      currentAvgSalary /= workerCount;

      if (maxAvgSalary < currentAvgSalary) {
        maxAvgSalary = currentAvgSalary;
        bestRestaurantName = name;
      }
    }
    let bestRestaurant = restaurants[bestRestaurantName];
    //  let sortBySalary = [];

    //  for (res in bestRestaurant) {
    //    sortBySalary.push([res, bestRestaurant[res]]);
    //  }
    //  sortBySalary.sort((a, b) => b - a);
    let sortedWorker = Object.entries(bestRestaurant).sort(
      (a, b) => b[1] - a[1]
    );
    let workersAsString = "";
    sortedWorker.forEach(
      (w) => (workersAsString += `Name: ${w[0]} With Salary: ${w[1]} `)
    );

    document.querySelector(
      "#bestRestaurant p"
    ).textContent = `Name: ${bestRestaurantName} Average Salary: ${maxAvgSalary.toFixed(
      2
    )} Best Salary: ${sortedWorker[0][1].toFixed(2)}`;
    document.querySelector("#workers p").textContent = workersAsString;
    console.log(sortBySalary);
  }
}
