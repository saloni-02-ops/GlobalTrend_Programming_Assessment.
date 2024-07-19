
// Write a function that takes a nested array and returns a flattened array.


function flatArray(arr){
  const flatArr = arr.flat(2);
  return flatArr
}
console.log(flatArray([1, [2, [3, 4], 5], 6]));
console.log(flatArray([1, [2, [3, [4, 5], 6], 7], 8]));
