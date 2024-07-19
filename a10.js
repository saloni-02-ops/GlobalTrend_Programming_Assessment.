//  Write a function that converts a given string to title case (capitalizing the first letter of each word).

function toTitleCase(str){
    const varOcg = str
    .toLowerCase()
    .split()
    .map(word => word.chaAt(0).toUpperCase() + word.slice(1))
    .join(' ')

    return varOcg;
}

console.log(toTitleCase('the quick brown fox'));
console.log(toTitleCase('javascript is fun'));