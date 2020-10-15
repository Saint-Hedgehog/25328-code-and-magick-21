'use strict';

(() => {

  const {setupUserName, userDialog, setupOpen, setupClose, dialogHandle, onSuccessSubmit, onError, userForm} = window.elements;
  const {getWizardCoatColor, getWizardEyesColor, getFireballColor, wizardCoatElement, wizardEyesElement, wizardFireballElement} = window.wizard;
  const {isEscEvent, isEnterEvent} = window.utils;
  const {moveOn} = window.shift;
  const {save} = window.backend;

  // Модальное окно
  const openPopup = () => {
    userDialog.classList.remove(`hidden`);

    setupOpen.removeEventListener(`click`, onSetupOpenClick);
    setupOpen.removeEventListener(`keydown`, onSetupOpenKeyDown);

    setupClose.addEventListener(`click`, onSetupCloseClick);
    setupClose.addEventListener(`keydown`, onSetupCloseKeyDownEsc);
    setupClose.addEventListener(`keydown`, onSetupCloseKeyDownEnter);

    wizardCoatElement.addEventListener(`click`, getWizardCoatColor);
    wizardEyesElement.addEventListener(`click`, getWizardEyesColor);
    wizardFireballElement.addEventListener(`click`, getFireballColor);
    dialogHandle.addEventListener(`mousedown`, moveOn);
  };

  const closePopup = () => {
    userDialog.classList.add(`hidden`);

    setupOpen.addEventListener(`click`, onSetupOpenClick);
    setupOpen.addEventListener(`keydown`, onSetupOpenKeyDown);

    setupClose.removeEventListener(`click`, onSetupCloseClick);
    setupClose.removeEventListener(`keydown`, onSetupCloseKeyDownEsc);
    setupClose.removeEventListener(`keydown`, onSetupCloseKeyDownEnter);

    wizardCoatElement.removeEventListener(`click`, getWizardCoatColor);
    wizardEyesElement.removeEventListener(`click`, getWizardEyesColor);
    wizardFireballElement.removeEventListener(`click`, getFireballColor);
    dialogHandle.removeEventListener(`mousedown`, moveOn);
  };

  const onSetupOpenClick = () => {
    openPopup();
  };

  const onSetupOpenKeyDown = (evt) => {
    isEnterEvent(evt, openPopup);
  };

  setupOpen.addEventListener(`click`, onSetupOpenClick);
  setupOpen.addEventListener(`keydown`, onSetupOpenKeyDown);

  const onSetupCloseClick = () => {
    closePopup();
  };

  const onSetupCloseKeyDownEnter = (evt) => {
    if (setupClose.matches(`:focus`)) {
      isEnterEvent(evt, closePopup);
    }
  };

  const onSetupCloseKeyDownEsc = (evt) => {
    if (!setupUserName.matches(`:focus`)) {
      isEscEvent(evt, closePopup);
    }
  };

  // функция отправки данных формы на сервер
  const onFormSubmit = (evt) => {
    save(new FormData(userForm), onSuccessSubmit, onError);
    evt.preventDefault();
    closePopup();
  };

  // добавление обработчика на отправку формы
  userForm.addEventListener(`submit`, onFormSubmit);

})();
