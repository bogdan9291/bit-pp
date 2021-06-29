function Person(firstName, surname) {
  this.firstName = firstName;
  this.surname = surname;
}

function Employee(firstName, surname, job, salary) {
  Person.call(this, firstName, surname);
  this.job = job;
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

function Developer(firstName, surname, job, salary, specialization) {
  Employee.call(this, firstName, surname, job, salary);
  this.specialization = specialization;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

function Manager(firstName, surname, job, salary, department) {
  Employee.call(this, firstName, surname, job, salary);
  this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Developer.prototype.getSpecialization = function () {
  console.log("This developer's specialization is " + this.specialization);
};

Manager.prototype.getDepartment = function () {
  console.log("This manager's department is " + this.department);
};

Manager.prototype.changeDepartment = function (changeTo) {
  this.department = changeTo;
};

Employee.prototype.getData = function () {
  return (
    "This employee's name is " +
    this.firstName +
    " " +
    this.surname +
    " and his salary is " +
    this.salary +
    " EUR per month"
  );
};

Employee.prototype.getSalary = function () {
  console.log("This employee's salary is " + this.salary + " EUR per month");
};

Employee.prototype.increaseSalary = function () {
  this.salary *= 1.1;
  console.log(
    "This employee's salary has been increased by 10% and is now " +
      this.salary +
      " EUR per month"
  );
};

var developer1 = new Developer(
  "Bogdan",
  "Manasijevic",
  "Developer",
  5000,
  "Backend"
);

developer1.getSpecialization();
developer1.getSalary();
developer1.increaseSalary();
console.log(developer1.getData());
