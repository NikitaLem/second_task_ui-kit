var day = document.querySelectorAll('.calendar__list-item');

for(var i = 0; i < day.length; i++) {
    if(day[i].classList.contains('calendar__list-item_empty') == false) {
        day[i].addEventListener('click', getDay, false);
    }
}

function getDay(e) {
    for(var j = 0; j < day.length; j++) {
        day[j].classList.remove('calendar__list-item_active');
    }
    if(e.target.classList.contains('calendar__list-item_active') == false) {
        e.target.classList.add('calendar__list-item_active');
    }
    document.querySelector('.calendar__date').innerHTML = e.target.innerHTML;
}