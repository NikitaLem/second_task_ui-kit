/*JS code for sliders with popup*/
var sliderPopup = document.querySelectorAll('.slider_popup');
var popup = document.querySelector('.slider__popup');

for(var i =0; i < sliderPopup.length; i++) {
    sliderPopup[i].addEventListener('mousemove', popupGo, false);
    sliderPopup[i].addEventListener('mousedown', popupShow, false);
    sliderPopup[i].addEventListener('mouseup', popupHide, false);
}

function popupGo(e) {
    popup.style.left = e.clientX -  popup.getBoundingClientRect().width/2 + 'px';
    popup.style.top = (e.target.getBoundingClientRect().top - popup.getBoundingClientRect().height*1.6 + window.pageYOffset) + 'px';
    popup.innerHTML = e.target.value;
}

function popupShow() {
    popup.classList.add('slider__popup_showed');
}

function popupHide() {
    popup.classList.remove('slider__popup_showed');
}
/*JS code for sliders with track*/
function sliderTrack() {
    var val = $('.slider_track').val();
    $('.slider_track').css({'background':'-webkit-linear-gradient(left, #4eb7a8 0%, #4eb7a8 '+val+'%, #e5e5e5 '+val+'% ,#e5e5e5 100%)'});
}

document.querySelector('.slider_track').addEventListener('input', sliderTrack, false);