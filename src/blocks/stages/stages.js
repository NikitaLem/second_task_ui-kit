const myStages = function() {
  const stagesLine = document.querySelector('.stages');
  const stagesMarks = [...document.querySelectorAll('.stages__mark')];
  const inputExample = document.getElementById('test');

  const setFullMarks = function setFullMarksOnInput() {
    let val = inputExample.value;

    stagesMarks.forEach((item, index) => {
      if (index < val && !item.classList.contains('stages__mark_full')) {
        item.classList.add('stages__mark_full');
      }

      if (index >= val && item.classList.contains('stages__mark_full')) {
        item.classList.remove('stages__mark_full');
      }
    });
  };

  const fillLine = function fillLineProgression() {
    const fullMarks = [...document.querySelectorAll('.stages__mark_full')];

    let progressPrc = (100 / (stagesMarks.length - 1)) * (fullMarks.length - 1);

    stagesLine.style.background = `-webkit-linear-gradient(left, #e75735 0%, #e75735 ${progressPrc}%, #e5e5e5 ${progressPrc}% ,#e5e5e5 100%)`;
  };

  inputExample.addEventListener('input', setFullMarks, false);
  inputExample.addEventListener('input', fillLine, false);
};

export { myStages };
