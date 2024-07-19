
// Write a function that takes an array and returns a new array with duplicates removed

function removeDuplicate(arr){
  const newArray = [...new Set(arr)];

  return newArray;
}

console.log(removeDuplicate([1, 2, 1, 3, 4, 2, 4, 5, 13, 12, 13]));