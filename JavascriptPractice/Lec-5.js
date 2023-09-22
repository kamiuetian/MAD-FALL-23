/**Objects
 * {key : value, key: value}
 */
let student = {
  name: "kamran",
  reg: 1,
  calculateCgpa: function () {
    console.log(this.name, this.reg);
  },
  address: { city: "Attock", Country: "Pakistan" },
  get getName() {
    return this.name;
  },
  set setName(n) {
    this.name = n;
  },
  getMyName: function () {
    return this.name;
  },
};
//console.log(student.calculateCgpa());
/*student.address = "comsats";
delete student.name;
console.log(student);
console.log(student.city);
for (let x in student) {
  console.log(student[x]);
}*/
student.calculateCgpa();
student.setName = "Ali";
console.log(student.getName);

function Student(name, reg) {
  this.name = name;
  this.reg = reg;
  this.display = function () {
    this.name, this.reg;
  };
}

let std1 = new Student("Ali", 4);
let std2 = new Student("Qasim", 6);
