// document.getElementbyID("count").innerText = 5

// let count = 0;

// let myAge = 24;
// console.log(myAge);

// let firstBatch = 5

// let count = firstBatch

// console.log(count)

// initialize as 0
// listen for clicks on increment buton
// increment the count varaible when the button is clicked
// change the count-el in the html

let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}