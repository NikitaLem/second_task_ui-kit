/*JS code for sliders with popup*/
var sliderPopup = document.querySelectorAll('.sliders_popup');
var popup = document.querySelector('.sliders__popup');

for(var i =0; i<sliderPopup.length; i++) {
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
    popup.classList.add('sliders__popup_show');
}

function popupHide() {
    popup.classList.remove('sliders__popup_show');
}
/*JS code for sliders with track*/
function sliderTrack() {
    var val = $('.sliders_track').val();
    $('.sliders_track').css({'background':'-webkit-linear-gradient(left, #4eb7a8 0%, #4eb7a8 '+val+'%, #e5e5e5 '+val+'% ,#e5e5e5 100%)'});
}

document.querySelector('.sliders_track').addEventListener('input', sliderTrack, false);