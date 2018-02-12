import { setTimeout } from "timers";

var btns = document.getElementsByClassName('btn');
console.log(btns);
for(var i=0; i<btns.length; i++) {
    btns[i].addEventListener('click', rippleAnim);
}
function rippleAnim(e) {
    e.target.querySelector('.ripple').classList.add('ripple_show');
    setTimeout(function() { e.target.querySelector('.ripple').classList.remove('ripple_show'); }, 600);
}



/*var canvas = document.querySelectorAll('.btn__canvas');
var context = canvas[0].getContext("2d");

var mouseX = 0;  
var mouseY = 0;  

for(var i=0; i<canvas.length; i++) {
    canvas[i].addEventListener('mousemove', setMousePosition, false);
    canvas[i].addEventListener('mouseenter', update, false);
    canvas[i].addEventListener('mouseleave', clear, false);
}

function setMousePosition(e) {  
    mouseX = e.clientX - e.target.clientLeft - 10; 
    mouseY = e.clientY - e.target.clientTop - 10;
}

function update(e) {      

    context.clearRect(0, 0, 78, 22);
    
    context.beginPath();
    context.arc(mouseX, mouseY, 20, 0, 2*Math.PI, true);
    context.fillStyle = 'rgba(190, 243, 249, 0.3)';
    context.fill();

    requestAnimationFrame(update);
}

function clear(e) {
    context.clearRect(0, 0, 78, 22);
    requestAnimationFrame(clear);
}*/