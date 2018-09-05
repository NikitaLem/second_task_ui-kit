const myCalendar = function() {
  const calendar = document.querySelector('.calendar');
  const monthView = document.querySelector('.calendar__month');
  const dateView = document.querySelector('.calendar__date');
  const prevMonthBtn = document.querySelector('.calendar__button_left');
  const nextMonthBtn = document.querySelector('.calendar__button_right');
  const infoView = document.querySelector('.calendar__info');
  const dayList = [...document.querySelectorAll('.calendar__list-item')];

  const date = new Date();

  const setCalendar = function setMonthDateAndFillCalendar() {
    const defaultMonth = date.getMonth();
    const currentMonth = date.toLocaleString('en-us', { month: 'long' });
    
    monthView.innerHTML = currentMonth;
    dateView.innerHTML = date.getDate();

    const fillDayList = function fillCalendarDatesAndSetInactiveClasses() {
      let dayOfWeek, diff;

      dayOfWeek = date.getDay();
      if (dayOfWeek === 0) dayOfWeek = 7;
      diff = 1 - dayOfWeek;
      date.setDate(1 + diff);

      dayList.forEach((item) => {
        item.classList.remove('calendar__list-item_empty');
        item.classList.remove('calendar__list-item_active');

        if (date.getMonth() !== defaultMonth) {
          item.classList.add('calendar__list-item_empty');
        }

        item.innerHTML = date.getDate();
        date.setDate(date.getDate() + 1);
      });
    };

    fillDayList();

    date.setMonth(defaultMonth);
    showInfo();
  };

  const showInfo = function() {
    const currentDate = new Date();

    const dateDiffInDays = Math.round((date - currentDate) / (24 * 60 * 60 *1000));

    switch (dateDiffInDays) {
      case 0: {
        infoView.innerHTML = 'TODAY';
        break;
      }
      case 1: {
        infoView.innerHTML = 'TOMMOROW';
        break;
      }
      case -1: {
        infoView.innerHTML = 'YESTERDAY';
        break;
      }
      default: {
        if (dateDiffInDays > 0) {
          infoView.innerHTML = `IN ${dateDiffInDays} DAYS`;
          break;
        }

        infoView.innerHTML = `${-dateDiffInDays} AGO`;
        break;
      }
    }
  };

  const setNextMonth = function addMonthByOneAndSetCalendar() {
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    setCalendar();
  };

  const setPrevMonth = function reduceMonthByOneAndSetCalendar() {
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    setCalendar();
  };

  const chooseDay = function setChoosenDayOnHeader(event) {
    const target = event.target;
    
    if (!target.closest('.calendar__list-item')) return;
    if (target.classList.contains('calendar__list-item_empty')) return;

    dateView.innerHTML = target.innerHTML;
    dayList.forEach((item) => { 
      item.classList.remove('calendar__list-item_active');
    });
    target.classList.add('calendar__list-item_active');

    date.setDate(parseInt(target.innerHTML));
    
    showInfo();
  };

  nextMonthBtn.addEventListener('click', setNextMonth, false);
  prevMonthBtn.addEventListener('click', setPrevMonth, false);
  calendar.addEventListener('click', chooseDay, false);

  setCalendar();
};

export { myCalendar };
