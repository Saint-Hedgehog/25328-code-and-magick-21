'use strict';

(() => {

  const {setupUserName, userDialog, wizardCoat, wizardEyes, wizardFireball, setupOpen, setupClose, dialogHandle} = window.elements;
  const {getWizardCoatColor, getWizardEyesColor, getFireballColor} = window.colorize;

  // Модальное окно
  const onPopupEscPress = (evt) => {
    if (!setupUserName.matches(`:focus`)) {
      window.util.isEscEvent(evt, closePopup);
    }
  };

  const openPopup = () => {
    userDialog.classList.remove(`hidden`);

    document.addEventListener(`keydown`, onPopupEscPress);
    wizardCoat.addEventListener(`click`, getWizardCoatColor);
    wizardEyes.addEventListener(`click`, getWizardEyesColor);
    wizardFireball.addEventListener(`click`, getFireballColor);
  };

  const closePopup = () => {
    userDialog.classList.add(`hidden`);

    document.removeEventListener(`keydown`, onPopupEscPress);
    wizardCoat.removeEventListener(`click`, getWizardCoatColor);
    wizardEyes.removeEventListener(`click`, getWizardEyesColor);
    wizardFireball.removeEventListener(`click`, getFireballColor);
  };

  setupOpen.addEventListener(`click`, () => {
    openPopup();
  });

  setupOpen.addEventListener(`keydown`, (evt) => {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener(`click`, () => {
    closePopup();
  });

  setupClose.addEventListener(`keydown`, (evt) => {
    window.util.isEnterEvent(evt, closePopup);
  });

  // Перетаскивание модального окна
  dialogHandle.addEventListener(`mousedown`, (evt) => {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let dragged = false;

    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();

      dragged = true;

      const shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = `${userDialog.offsetTop - shift.y}px`;
      userDialog.style.left = `${userDialog.offsetLeft - shift.x}px`;

    };

    const onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);

      if (dragged) {
        const onClickPreventDefault = (clickEvt) => {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener(`click`, onClickPreventDefault);
        };
        dialogHandle.addEventListener(`click`, onClickPreventDefault);
      }
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });

})();
