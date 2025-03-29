const inputElement1 = document.getElementById("input1") as HTMLInputElement;
const inputElement2 = document.getElementById("input2") as HTMLInputElement;
const buttonElemet = document.querySelector("submit")!;

function add(a: number, b: number) {
  return a + b;
}

buttonElemet.addEventListener('click', () => {
  const a = inputElement1.value;
  const b = inputElement2.value;
  const result = add(a, b);
  console.log(result);
  });