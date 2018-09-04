import { myBtnFunc } from '../blocks/buttons/buttons';
import { myChart } from '../blocks/prc-charts/pie-charts';
import '../blocks/prc-charts/prc-charts';
import { sliderWithPopup, sliderWithTrack } from '../blocks/sliders/sliders';
import { myStages } from '../blocks/stages/stages';
import { myForm } from '../blocks/form-elements/form/form-elements';
import '../blocks/calendar/calendar.js';
import '../blocks/messaging/messaging.js';
import '../assets/favicons/favicons.js';

const html = require('../blocks/index.pug');
const css = require('../blocks/index.styl');

(function() {
  myBtnFunc();
  sliderWithPopup();
  sliderWithTrack();
  myStages();
  myForm();
}());
