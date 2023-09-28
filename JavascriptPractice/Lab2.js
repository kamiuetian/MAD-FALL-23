/**Classes
 *
 */

const Student = class {
  constructor(n) {
    this._name = n;
  }
  get name() {
    return this._name;
  }
  display() {
    console.log("I am a Studnet");
  }
  static universityTime() {
    return "8:30";
  }
};
/**
 * CS Student
 */
const CSStudent = class extends Student {
  constructor(n, fyp) {
    this.fyp = fyp;
    super(n);
  }
  /**display method */
  display() {
    console.log("I am a CS Student");
  }
};
/**creating object */
let std1 = new CSStudent("ALI", "ABC");
std1.display();
Student.universityTime();

/**Arrow function */
let arr1 = [1, 2, 3, 4];
function squarer(x)
{
    x**2
}
arr1.map((x) => {
  return x ** 2;
});
