var inputElement1 = document.getElementById("input1");
var inputElement2 = document.getElementById("input2");
var buttonElemet = document.querySelector("submit");
function addnum(a, b) {
    return a + b;
}
buttonElemet.addEventListener('click', function () {
    var a = inputElement1.value;
    var b = inputElement2.value;
    var result = addnum(+a, +b);
    console.log(result);
});
