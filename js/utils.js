'use strict';

(() => {

  const isEscEvent = (evt, action) => {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      action();
    }
  };

  const isEnterEvent = (evt, action) => {
    if (evt.key === `Enter`) {
      action();
    }
  };

  const getRandomElement = (array) => {
    const randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  // ошибка при получении или отправке данных
  const createErrorMessage = (message) => {
    let error = document.createElement(`div`);
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
    error.textContent = message;
    document.body.insertAdjacentElement(`afterbegin`, error);
  };

  window.utils = {
    isEscEvent,
    isEnterEvent,
    getRandomElement,
    createErrorMessage,
  };

})();
