//ex 1
let numbers = [18, 2, 13, 3, 14, 4];
  for (let n of numbers) {
    if (n >= 13) {
      console.log(n);
   }
}
// ex 2
let n1 = 2;
let n2 = 6; 
for (let i = n1; i <= n2; i++){
   console.log(i)
}

//ex 3
let num1 = Number(prompt('Enter your number: '))
let num2 = Number(prompt('Enter your number: '))
let sum = num1 + num2;
console.log(sum) 

// const numbers = [12, 2, 34, 1, 23, 5, 6, 7, 24, 45];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++){
//    sum += numbers[i];
// }

// console.log(sum);

// function getAriphmetic(a, b, c, d){
//    let s = (a + b + c + d) / 4;
//    return s;
// }

// let g = getAriphmetic(9, 10, 11, 8)
// console.log(g);

// function getStr(a, b){
//    let c = `My name is ${a}, My score is ${b}`;
//    return c;
// }

// let n1 = prompt();
// let n2 = prompt();
// let n3 = prompt();
// let n4 = prompt();
// let name = prompt();
// let username = getAriphmetic(n1, n2, n3, n4);
// let str = getStr(result, username);
// console.log(str);
