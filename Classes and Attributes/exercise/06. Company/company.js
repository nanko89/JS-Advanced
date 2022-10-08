class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (!name || Number(salary) < 0 || !salary || !position || !department) {
      throw new Error("Invalid input!");
    }

    let employee = {
      name,
      salary: Number(salary),
      position,
    };

    if (!this.departments.hasOwnProperty(department)) {
      this.departments[department] = [];
    }

    this.departments[department].push(employee);

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let bestAvgSalary = 0;
    let bestDepartment = "";

    for (const [department, employees] of Object.entries(this.departments)) {
      let currentAvgSalary = 0;
      for (const employee of employees) {
        currentAvgSalary += Number(employee.salary);
      }
      currentAvgSalary /= employees.length;

      if (currentAvgSalary > bestAvgSalary) {
        bestAvgSalary = currentAvgSalary;
        bestDepartment = department;
      }
    }

    let bestEmployee = this.departments[bestDepartment]
      .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
      .map((e) => `${e.name} ${e.salary} ${e.position}`)
      .join("\n");

    return `Best Department is: ${bestDepartment}
Average salary: ${bestAvgSalary.toFixed(2)}
${bestEmployee}`;
  }
}

let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
console.log(
  c.addEmployee("Pesho", 1500, "electrical engineer", "Construction")
);
console.log(c.addEmployee("Slavi", 500, "dyer", "Construction"));
console.log(c.addEmployee("Stan", 2000, "architect", "Construction"));
console.log(
  c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing")
);
console.log(c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"));
console.log(c.addEmployee("Gosho", 1350, "HR", "Human resources"));
console.log(c.bestDepartment());
