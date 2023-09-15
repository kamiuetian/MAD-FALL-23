let number_1 = undefined;
console.log(typeof number_1);
let numb2 = null;
console.log(typeof numb2);
/**
 * Array
 */
let arr1 = [];
console.log(typeof arr1);
let obj1 = {};
console.log(typeof obj1);
function getName() {}
console.log(typeof getName);

/**Arrays
 *
 * int arr=[1,2,3,"abc"]
 */
let arr = [1, 2, 3, "abc", "def"];
console.log(arr.toString());
for (let i = 0; i <= arr.length; i++) {}
/**
 * Functions in javascript
 */
function mymap(a) {
  /** */
  console.log(a);
  function myinnerfunc() {
    console.log("i am an inner function");
  }
  //console.log(a);
  return myinnerfunc;
}
function myparam() {
  return 30;
}
let outcome = mymap(myparam);
outcome();
function mymapper() {
  console.log("i am called");
}
let names = ["a", "b", "c"];
names.map(mymapper);
