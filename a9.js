// Write a function that filters out even numbers from an array.

function filterEvenNumbers(arr){
    const filterEven = arr.filter(num => num%2 !==0);
    return filterEven;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));