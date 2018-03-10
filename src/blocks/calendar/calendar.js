var day = document.querySelectorAll('.calendar__list-item');
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var date = new Date();
var k = date.getMonth();

for(var i = 0; i < day.length; i++) {
    if(day[i].classList.contains('calendar__list-item_empty') == false) {
        day[i].addEventListener('click', getDay, false);
    }
}

document.querySelector('.calendar__button_left').addEventListener('click', prevMonth, false);
document.querySelector('.calendar__button_right').addEventListener('click', nextMonth, false);

function getDay(e) {
    for(var j = 0; j < day.length; j++) {
        day[j].classList.remove('calendar__list-item_active');
    }
    if(e.target.classList.contains('calendar__list-item_active') == false) {
        e.target.classList.add('calendar__list-item_active');
    }
    document.querySelector('.calendar__date').innerHTML = e.target.innerHTML;
}

function nextMonth() {
    k++
    if(k>11) {
        k = 0;
    }
    document.querySelector('.calendar__month').innerHTML = months[k];
}

function prevMonth() {
    k--;
    if(k<0) {
        k = 11;
    }
    document.querySelector('.calendar__month').innerHTML = months[k];
}