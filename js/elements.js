'use strict';

(() => {

  const WIZARDS_NUMBER = 4;

  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 25;

  const userDialog = document.querySelector(`.setup`);
  const wizardCoat = userDialog.querySelector(`.wizard-coat`);
  const wizardEyes = userDialog.querySelector(`.wizard-eyes`);
  const wizardFireball = userDialog.querySelector(`.setup-fireball-wrap`);

  const setupUserName = userDialog.querySelector(`.setup-user-name`);

  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = userDialog.querySelector(`.setup-close`);

  const dialogHandle = userDialog.querySelector(`.upload`);

  const userForm = userDialog.querySelector(`.setup-wizard-form`);

  // ошибка при получении или отправке данных
  const onError = (errorMessage) => {
    const error = document.createElement(`div`);
    error.style = `z-index: 100; margin: 0 auto; text-align: center`;
    error.style.width = `790px`;
    error.style.height = `90px`;
    error.style.paddingTop = `45px`;
    error.style.backgroundColor = `navy`;
    error.style.border = `5px solid white`;
    error.style.position = `absolute`;
    error.style.top = `180px`;
    error.style.left = 0;
    error.style.right = 0;
    error.style.fontSize = `35px`;
    error.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, error);
  };

  // успешная отправка данных
  const onSuccessSubmit = (response) => {
    userDialog.classList.add(`hidden`);
    const message = document.createElement(`div`);
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
  };

  window.elements = {
    WIZARDS_NUMBER,
    MIN_NAME_LENGTH,
    MAX_NAME_LENGTH,
    userDialog,
    wizardCoat,
    wizardEyes,
    wizardFireball,
    setupUserName,
    setupOpen,
    setupClose,
    dialogHandle,
    userForm,
    onError,
    onSuccessSubmit
  };

})();
