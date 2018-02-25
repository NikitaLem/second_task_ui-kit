var inputs = document.querySelectorAll('.form__input');
var alerts = document.querySelectorAll('.form__alert');

for(var i=0; i<inputs.length; i++) {
    inputs[i].addEventListener('blur', helper, false);
}

function helper() {
    for(var i=0; i<inputs.length; i++) {
        if(inputs[i].value=='') {
            alerts[i].innerHTML='ERROR';
            alerts[i].classList.remove('form__alert_green');
            alerts[i].classList.add('form__alert_red');
        }
        if(inputs[i].value!=='') {
            alerts[i].innerHTML='THANKS!';
            alerts[i].classList.remove('form__alert_red');
            alerts[i].classList.add('form__alert_green');
        }
    }
}