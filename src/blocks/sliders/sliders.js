const sliderWithPopup = function() {
	const sliderPopups = [...document.querySelectorAll('.slider_popup')];
	const popup = document.querySelector('.slider__popup');

	const popupShow = function popupOnMouseDownShow() {
		popup.classList.add('slider__popup_showed');
	};

	const popupGo = function popupOnMouseMoveGo(event) {
		const target = event.target;
		let coords = {
			top: target.getBoundingClientRect().top - popup.offsetHeight * 1.6 + window.pageYOffset,
			left: event.clientX -  popup.offsetWidth / 2,
		};

		const isPopupTooLeft = function(target) {
			if (coords.left < target.getBoundingClientRect().left + window.pageXOffset) {
				return true;
			}

			return false;
		};

		const isPopupTooRight = function(target) {
			if (coords.left > target.getBoundingClientRect().left + window.pageXOffset + target.offsetWidth - popup.offsetWidth / 2) {
				return true;
			}

			return false;
		};

		if (isPopupTooLeft(target)) {
			popup.style.left = target.getBoundingClientRect().left + window.pageXOffset + 'px';
		} else if (isPopupTooRight(target)) {
			popup.style.left = target.getBoundingClientRect().left + window.pageXOffset + target.offsetWidth - popup.offsetWidth / 2 + 'px';
		} else {
			popup.style.left = coords.left + 'px';
		}
	
		popup.style.top = coords.top + 'px';
		popup.innerHTML = event.target.value;
	};

	const popupHide = function popupOnMouseUpHide() {
		popup.classList.remove('slider__popup_showed');
	};

	sliderPopups.forEach((item) => {
		item.addEventListener('mousedown', popupShow, false);
		item.addEventListener('mousemove', popupGo, false);
		item.addEventListener('mouseup', popupHide, false);
	});
};

const sliderWithTrack = function() {
	const sliderTracks = [...document.querySelectorAll('.slider_track')];

	const changeSliderTrack = function changeOnInputSliderTrack(event) {
    const target = event.target;
    let val = target.value;
		target.style.background = `-webkit-linear-gradient(left, #4eb7a8 0%, #4eb7a8 ${val}%, #e5e5e5 ${val}% ,#e5e5e5 100%)`;
	};

	sliderTracks.forEach((item) => {
		item.addEventListener('input', changeSliderTrack, false);
	});
};

export { 
  sliderWithPopup, 
  sliderWithTrack,
};
