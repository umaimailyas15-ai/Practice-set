let n = prompt("Enter a number: ");

let array = [];

for(let i = 1; i <= n; i++) {
    array [i - 1] = i;
}
 
let sum = array.reduce((res, curr) => {
    return res + curr;
} 
)

console.log("sum: ", sum);

let factorial = array.reduce((res, curr) => {
    return res * curr;
} 
)

console.log("factorial: ", factorial);