
// Write a function that generates the first n numbers of the Fibonacci sequence.

function fibonacci(a1, a2){
var a=a1;
var b=a2;
for(var i=0; i<=10; i++){
  var temp = a + b;
  console.log(temp);
  a = b;
  b = temp;
}}
console.log(fibonacci(0, 1));