
// Write a function that takes a string and capitalizes the first letter of each word in the string.

function capitalizeWord(str){
  const words = str.split(" ");

  const capitalizeWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })

  const capitalizeString = capitalizeWords.join(" ");
  return capitalizeString;
}

const myString = "hello world";
console.log(capitalizeWord(myString));
