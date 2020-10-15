'use strict';

(() => {
  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 25;

  const {isEscEvent} = window.utils;

  const userDialog = document.querySelector(`.setup`);
  const setupUserName = userDialog.querySelector(`.setup-user-name`);
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = userDialog.querySelector(`.setup-close`);
  const dialogHandle = userDialog.querySelector(`.upload`);
  const userForm = userDialog.querySelector(`.setup-wizard-form`);

  const onSuccessSubmit = (response) => {
    userDialog.classList.add(`hidden`);
    const message = document.createElement(`div`);
    message.classList.add(`success-message`);
    message.style = `z-index: 100; margin: 0 auto; text-align: center`;
    message.style.width = `792px`;
    message.style.height = `90px`;
    message.style.paddingTop = `40px`;
    message.style.paddingBottom = `25px`;
    message.style.backgroundColor = `GreenYellow`;
    message.style.color = `black`;
    message.style.border = `5px solid black`;
    message.style.position = `absolute`;
    message.style.top = `180px`;
    message.style.left = 0;
    message.style.right = 0;
    message.style.fontSize = `35px`;
    message.textContent = `${response.username}! Ваши данные успешно отправлены`;
    document.body.insertAdjacentElement(`afterbegin`, message);

    document.addEventListener(`click`, closeSuccessMessage);
    document.addEventListener(`keydown`, onSuccessMessageKeyDown);
  };

  const onSuccessMessageClick = () => {
    closeSuccessMessage();
  };

  const onSuccessMessageKeyDown = (evt) => {
    isEscEvent(evt, closeSuccessMessage);
  };

  const closeSuccessMessage = () => {
    const successMessage = document.querySelector(`.success-message`);
    successMessage.remove();

    document.removeEventListener(`click`, onSuccessMessageClick);
    document.removeEventListener(`keydown`, onSuccessMessageKeyDown);
  };

  window.elements = {
    MIN_NAME_LENGTH,
    MAX_NAME_LENGTH,
    userDialog,
    setupUserName,
    setupOpen,
    setupClose,
    dialogHandle,
    userForm,
    onSuccessSubmit
  };

})();
