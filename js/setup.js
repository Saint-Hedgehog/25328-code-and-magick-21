'use strict';

const WIZARD_NAMES = [
  `Иван`,
  `Хуан Себастьян`,
  `Мария`,
  `Кристоф`,
  `Виктор`,
  `Юлия`,
  `Люпита`,
  `Вашингтон`
];
const WIZARD_SURNAMES = [
  `да Марья`,
  `Верон`,
  `Мирабелла`,
  `Вальц`,
  `Онопко`,
  `Топольницкая`,
  `Нионго`,
  `Ирвинг`
];
const COAT_COLORS = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`
];
const EYES_COLORS = [
  `black`,
  `red`,
  `blue`,
  `yellow`,
  `green`
];

const WIZARD_NUMBER = 4;

// показывает блок с персонажем
const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

// показывает блок с похожими персонажами
userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);

// функция получает рандомное число между min и max
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;// Максимум не включается, минимум включается

// функция отрисовки персонажей
const getWizards = () => {
  const nameIndex = randomNumber(0, WIZARD_NAMES.length - 1);
  const surnameIndex = randomNumber(0, WIZARD_SURNAMES.length - 1);
  const coatColorIndex = randomNumber(0, COAT_COLORS.length - 1);
  const eyesColorIndex = randomNumber(0, EYES_COLORS.length - 1);
  return {
    name: `${WIZARD_NAMES[nameIndex]} ${WIZARD_SURNAMES[surnameIndex]}`,
    coatColor: COAT_COLORS[coatColorIndex],
    eyesColor: EYES_COLORS[eyesColorIndex]
  };
};

// находит шаблон, который мы будем копировать.
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

// функция создает копию шаблона и вставляет в него случайное имя с фамилией, цвет мантии и цвет глаз
const renderWizard = (wizard) => {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  const {name, coatColor, eyesColor} = wizard;
  wizardElement.querySelector(`.setup-similar-label`).textContent = name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = eyesColor;

  return wizardElement;
};

// вставляет в пустой массив wizards элементы из функции getWizards()
const generateWizards = (wizardCount) => {
  const wizards = [];

  for (let i = 0; i < wizardCount; i++) {
    wizards.push(getWizards());
  }
  return wizards;
};

// список похожих персонажей
const wizards = generateWizards(WIZARD_NUMBER);

// создает контейнер для данных
const fragment = document.createDocumentFragment();

// Отрисовывает шаблон в документ
const getWizardTemplate = () => {
  wizards.forEach((wizard) => {
    fragment.appendChild(renderWizard(wizard));
  });
};

getWizardTemplate();

// находит элемент, в который мы будем вставлять похожих магов
userDialog.querySelector(`.setup-similar-list`).appendChild(fragment);

