document.addEventListener("contextmenu", function(inspect) {
    inspect.preventDefault();
})

var lamp_switch = document.getElementById("switch");
var lamp_light = document.getElementById("light");


function toggolbtn() {
    lamp_switch.classList.toggle("btn_on");
    lamp_light.classList.toggle("light_on")

}