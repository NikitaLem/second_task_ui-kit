var stages = document.querySelectorAll('.stages__mark');
var n = document.getElementById('test');

n.addEventListener('input', setFull, false);
n.addEventListener('input', runnerGo, false);

function setFull() {
    for(var i = 0; i < n.value; i++) {
        stages[i].classList.add('stages__mark_full');
    }
    for(var j = (stages.length - 1); j >= n.value; j--) {
        stages[j].classList.remove('stages__mark_full');
    }
}

function runnerGo() {
    var fullMarks = document.querySelectorAll('.stages__mark_full');
    $('.stages').css({'background':'-webkit-linear-gradient(left, #e75735 0%, #e75735 '+((100/(stages.length - 1))*(fullMarks.length - 1))+'%, #e5e5e5 '+((100/(stages.length - 1))*(fullMarks.length - 1))+'% ,#e5e5e5 100%)'});
}