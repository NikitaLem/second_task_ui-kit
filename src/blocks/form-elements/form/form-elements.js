const myForm = function() {
  const myForm = document.forms['my-form'];
  
  const ckeckInput = function showOrHideAlertMessage(event) {
    const target = event.target;

    if (!target.closest('.form__input')) return;

    const alert = target.nextElementSibling.querySelector('.form__alert');

    if (target.value === '') {
      alert.innerHTML = 'ERROR';
      if (alert.classList.contains('form__alert_ok')) alert.classList.remove('form__alert_ok');
      alert.classList.add('form__alert_error');
    } else {
      alert.innerHTML = 'THANKS';
      if (alert.classList.contains('form__alert_error')) alert.classList.remove('form__alert_error');
      alert.classList.add('form__alert_ok');
    }
  };

  const removeError = function removeErrorMessage(event) {
    const target = event.target;

    if (!target.closest('.form__input')) return;

    const alert = target.nextElementSibling.querySelector('.form__alert');

    alert.className = 'form__alert';
  };

  myForm.addEventListener('blur', ckeckInput, true);
  myForm.addEventListener('focus', removeError, true);
};

export { myForm };
