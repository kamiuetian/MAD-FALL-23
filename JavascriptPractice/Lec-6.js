/**Arrow function */
/*var a = 40;
var a = "haa";
function xyz(x, y) {
  var a = 50;
  return x + y;
}
xyz(4, 5);
console.log(a);*/

const xyz = (x, y) => {
  return x + y;
};
const abc = (x, y) => x + y;

const efg = (name) => {
  console.log(name);
};

const getstudent = () => {
  return { name: "ali" };
};

//console.log(getstudent());

/**spread and rest operator
 * ...
 * ...
 */

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
/**[1,2,3,4,5,6] */
for (x in arr3) {
  console.log(x);
}
//console.log(arr3);
/**
 * main(string args[])
 */
const adder = (...args) => {
  // console.log(args);
};
adder(2, 4);
adder(1, 3, 4, 5);
adder(10, 3, 4, 5, 7, 8, 9);
