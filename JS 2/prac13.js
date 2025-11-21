/*
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " From XYZ";
*/

/*
let divs = document.querySelectorAll(".box");
div[0].innerText = "new name 0";
div[1].innerText = "new name 1";
div[2].innerText = "new name 2";
*/

//Using for loops:
let divs = document.querySelectorAll(".box");
let i = 1
for(val of divs) {
    div.innerText = "new name";
    i++;
}