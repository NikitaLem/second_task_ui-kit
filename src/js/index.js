import greet from './greeter.js';
import '../blocks/buttons/buttons.js';
import '../blocks/prc-charts/pie-charts.js';
import '../blocks/prc-charts/prc-charts.js';
import '../blocks/sliders/sliders.js';
import '../blocks/stages/stages.js';
import '../blocks/form-elements/form-elements.js';
import '../blocks/location/location.js';

var html = require('../blocks/index.pug');
const css = require('../blocks/index.styl');

console.log("I'm the enty point");
greet();