// Employee class
class Employee {
  constructor(name = "", dept = "general") {
    this.name = name;
    this.dept = dept;
  }
}

// Manager class based on Employee
class Manager extends Employee {
  constructor(name = "", dept = "general", reports = []) {
    super(name, dept);
    this.reports = reports;
  }
}

// WorkerBee class based on Employee
class WorkerBee extends Employee {
  constructor(name = "", dept = "general", projects = []) {
    super(name, dept);
    this.projects = projects;
  }
}

// SalesPerson class based on WorkerBee
class SalesPerson extends WorkerBee {
  constructor(name = "", dept = "sales", projects = [], quota = 100) {
    super(name, dept, projects);
    this.quota = quota;
  }
}

// Engineer class based on WorkerBee
class Engineer extends WorkerBee {
  constructor(name = "", dept = "engineering", projects = [], machine = "") {
    super(name, dept, projects);
    this.machine = machine;
  }
}

// Example usage:

const manager = new Manager("John Doe", "management", [
  new Employee("Alice"),
  new Employee("Bob"),
]);
const salesPerson = new SalesPerson(
  "Eve",
  undefined,
  ["Project A", "Project B"],
  200
);
const engineer = new Engineer(
  "Charlie",
  undefined,
  ["Project X"],
  "Machine 123"
);

console.log("Manager:", manager);
console.log("SalesPerson:", salesPerson);
console.log("Engineer:", engineer);
