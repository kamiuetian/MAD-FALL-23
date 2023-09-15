/**
 * Passign parameters to inner function
 * Map
 * Reduce
 * filter
 */

function mymap() {
  function myinnerfunc(x, y) {
    return x + y;
  }
  return myinnerfunc;
}

let outcome = mymap();
//console.log(outcome(5, 4));
/**Maps */
function squareIt(x) {
  return x ** 2;
}
let arr_numb = [1, 2, 3, 4, 5];
let result = arr_numb.map(squareIt);
console.log(result);
console.log(arr_numb);
/**Filter */
function myFilter(x) {
  if (x > 3) return true;
  else return false;
}
/**[f,f,f,t,t] */
let result_filter = arr_numb.filter(myFilter);
//console.log(result_filter);

/**reduce
 * [1,2,3,4,5]
 */
function reducer(x, y) {
  return x + y;
}
let result_reduce = arr_numb.reduce(reducer, 100);
/**
 * reducer(100,1)
 * reduder(101,2)
 * ...
 *
 */
console.log(result_reduce);

/**Scope is javascript
 *
 */
let global_var = 30;
function myscopeFunc() {
  let local_var = 50;
  console.log(global_var);
}
if (1) {
  var local_if_var = 10;
}
{
  let var_block_var = 100;
}
myscopeFunc();
//console.log(local_block_var);
/**Counter */
function counter() {
  let count = 0;
  console.log(count);
  function inc_count() {
    count += 1;
    console.log(`count inside ${count}`);
  }
  return inc_count;
}

let ret = counter();
ret();
ret();
ret();
