'use strict';

(() => {

  const {WIZARDS_NUMBER, userDialog, onError} = window.elements;
  const {load} = window.backend;

  // показывает блок с похожими персонажами
  userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);

  // находит шаблон, который мы будем копировать.
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

  // функция создает копию шаблона и вставляет в него случайное имя с фамилией, цвет мантии и цвет глаз
  const renderWizard = (wizard) => {
    const wizardElement = similarWizardTemplate.cloneNode(true);
    const {name, colorCoat, colorEyes} = wizard;
    wizardElement.querySelector(`.setup-similar-label`).textContent = name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = colorEyes;

    return wizardElement;
  };

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  const similarListElement = userDialog.querySelector(`.setup-similar-list`);
  // успешное получение данных: отрисовка и показ 4-х случайных похожих магов на странице
  const onSuccessLoad = (wizardsArray) => {
    const randomWizards = shuffleArray(wizardsArray).slice(0, WIZARDS_NUMBER);
    const wizardsFragment = document.createDocumentFragment();
    for (let i = 0; i < randomWizards.length; i++) {
      wizardsFragment.appendChild(renderWizard(randomWizards[i]));
    }
    userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
    similarListElement.appendChild(wizardsFragment);
  };
  // загрузка с сервера массива с похожими магами и обработка данных
  load(onSuccessLoad, onError);

})();
