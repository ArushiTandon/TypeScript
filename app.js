var inputElemnent = document.getElementById("input1");
var inputElemnent2 = document.getElementById("input2");
var button = document.querySelector("submit");
function add(a, b) {
    return a + b;
}
button.addEventListener('click', function () {
    var a = inputElemnent.value;
    var b = inputElemnent2.value;
    var result = add(+a, +b);
    console.log(result);
});
