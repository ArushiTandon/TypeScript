"use strict";
const inputElement1 = document.getElementById("input1");
const inputElement2 = document.getElementById("input2");
const buttonElemet = document.querySelector("submit");
const numResults = [];
const stringResults = [];
function addnum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return +a + +b;
    }
}
function printResult(resultObj) {
    console.log(resultObj.val, resultObj.timestamp);
}
buttonElemet.addEventListener('click', () => {
    const a = inputElement1.value;
    const b = inputElement2.value;
    const result = addnum(+a, +b);
    numResults.push(result);
    const stringResult = addnum(a, b);
    stringResults.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, stringResult);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It Worked');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result);
});
