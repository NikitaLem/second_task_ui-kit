var slider = document.querySelector('.sliders');
var popup = document.querySelector('.sliders__popup');

slider.addEventListener('mousemove', popupGo, false);
slider.addEventListener('mousedown', popupShow, false);
slider.addEventListener('mouseup', popupHide, false);

function popupGo(e) {
    popup.style.left = e.clientX -  popup.getBoundingClientRect().width/2 + 'px';
    popup.style.top = (e.target.getBoundingClientRect().top - popup.getBoundingClientRect().height*1.6 + document.documentElement.scrollTop) + 'px';
    popup.innerHTML = e.target.value;
    console.log(document.documentElement.scrollTop);
}

function popupShow() {
    popup.classList.add('sliders__popup_show');
}

function popupHide() {
    popup.classList.remove('sliders__popup_show');
}