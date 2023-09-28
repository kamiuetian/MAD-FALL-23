// Person class
function Person(name = "John Doe", age = 0, gender = "Unknown") {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

// Employee class (derived from Person)
function Employee(
  name,
  age,
  gender,
  department = "Unknown",
  designation = "Unknown",
  salary = 0
) {
  Person.call(this, name, age, gender);
  this.department = department;
  this.designation = designation;
  this.salary = salary;
}

// Student class (derived from Person)
function Student(name, age, gender, studentId = "Unknown", grade = "Unknown") {
  Person.call(this, name, age, gender);
  this.studentId = studentId;
  this.grade = grade;
}

// Teacher class (derived from Employee)
function Teacher(
  name,
  age,
  gender,
  department,
  designation,
  salary,
  subject = "Unknown"
) {
  Employee.call(this, name, age, gender, department, designation, salary);
  this.subject = subject;
}

// Staff class (derived from Employee)
function Staff(
  name,
  age,
  gender,
  department,
  designation,
  salary,
  role = "Unknown"
) {
  Employee.call(this, name, age, gender, department, designation, salary);
  this.role = role;
}

// Courses class with aggregation association with Student and Teacher
function Courses() {
  this.students = [];
  this.teachers = [];

  this.addStudent = function (student) {
    this.students.push(student);
  };

  this.addTeacher = function (teacher) {
    this.teachers.push(teacher);
  };
}

// Creating objects
const student1 = new Student("Alice", 20, "Female", "S12345", "A");
const student2 = new Student("Bob", 21, "Male", "S67890", "B");

const teacher1 = new Teacher(
  "Eve",
  35,
  "Female",
  "Math",
  "Professor",
  60000,
  "Mathematics"
);
const teacher2 = new Teacher(
  "Charlie",
  40,
  "Male",
  "Science",
  "Associate Professor",
  55000,
  "Physics"
);

const staff1 = new Staff(
  "David",
  30,
  "Male",
  "Admin",
  "Manager",
  45000,
  "Admin Officer"
);
const staff2 = new Staff(
  "Grace",
  25,
  "Female",
  "HR",
  "Coordinator",
  40000,
  "HR Coordinator"
);

// Creating Courses and associating students and teachers
const courses = new Courses();
courses.addStudent(student1);
courses.addStudent(student2);
courses.addTeacher(teacher1);
courses.addTeacher(teacher2);

// Printing information
console.log("Student 1:", student1);
console.log("Student 2:", student2);
console.log("Teacher 1:", teacher1);
console.log("Teacher 2:", teacher2);
console.log("Staff 1:", staff1);
console.log("Staff 2:", staff2);
console.log("Courses:", courses);
