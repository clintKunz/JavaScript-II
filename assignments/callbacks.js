const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
  }

function findFirst(a) {
  return a[0];
}

console.log(firstItem(items, findFirst));

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

function length(item) {
  return item.length;
}

console.log(getLength(items, length));


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return arr[cb(arr)];
}

function getLastSpot(item) {
  return item.length-1; 
}

console.log(last(items, getLastSpot));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
