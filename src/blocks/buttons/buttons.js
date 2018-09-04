const myBtnFunc = function() {
  const btnsWithRipple = [...document.querySelectorAll('.btn-with-ripple')];

  btnsWithRipple.forEach((item) => { 
    item.addEventListener('click', rippleAnim, false); 
  });

  function rippleAnim(event) {
    const target = event.target;
    const ripple = document.createElement("DIV");

    document.body.append(ripple);
    ripple.classList.add('ripple');

    if (target.classList.contains('btn_red')) {
      ripple.classList.add('ripple_red');
    } else {
      ripple.classList.add('ripple_green');
    }
    
    ripple.style.top = event.clientY + 'px';
    ripple.style.left = event.clientX + 'px';
    
    setTimeout(function() { ripple.remove(); }, 300);
  }
};

export { myBtnFunc };