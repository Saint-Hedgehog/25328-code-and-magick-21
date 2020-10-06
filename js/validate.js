'use strict';

(() => {

  const {MIN_NAME_LENGTH, MAX_NAME_LENGTH, setupUserName} = window.elements;

  // Проверка заполнения имени
  setupUserName.addEventListener(`invalid`, () => {
    if (setupUserName.validity.valueMissing) {
      setupUserName.setCustomValidity(`Обязательное поле`);
    } else {
      setupUserName.setCustomValidity(``);
    }
  });

  setupUserName.addEventListener(`input`, () => {
    let valueLength = setupUserName.value.length;

    if (valueLength < MIN_NAME_LENGTH) {
      setupUserName.setCustomValidity(`Ещё ${MIN_NAME_LENGTH - valueLength} симв.`);
    } else if (valueLength > MAX_NAME_LENGTH) {
      setupUserName.setCustomValidity(`Удалите лишние ${valueLength - MAX_NAME_LENGTH} симв.`);
    } else {
      setupUserName.setCustomValidity(``);
    }
  });

})();
