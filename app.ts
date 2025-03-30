const inputElement1 = document.getElementById("input1") as HTMLInputElement;
const inputElement2 = document.getElementById("input2") as HTMLInputElement;
const buttonElemet = document.querySelector("submit")!;

const numResults: number[] = []; 
const stringResults: string[] = [];

type Combinable = number | string; // type alias for number or string
type Result = { val: number; timestamp: Date }; // type alias for object with val and timestamp

interface ResultObj{
  val: number; 
  timestamp: Date
}

function addnum(a: Combinable, b: Combinable) {
 if(typeof a === "string" && typeof b === "string"){
    return a + b; 
} 
else if(typeof a === "number" && typeof b === "number"){
    return a + b;
} 
else {
    return +a + +b;
  }
}

function printResult(resultObj: ResultObj) {
  console.log(resultObj.val, resultObj.timestamp);
}


buttonElemet.addEventListener('click', () => {
  const a = inputElement1.value;
  const b = inputElement2.value;
  const result = addnum(+a, +b);
  numResults.push(result as number);
  const stringResult = addnum(a, b);
  stringResults.push(stringResult as string);
  printResult({ val: result as number, timestamp: new Date() });
  console.log(numResults, stringResult);
  });