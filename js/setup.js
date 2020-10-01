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

const FIREBALLS = [
  `#ee4830`,
  `#30a8ee`,
  `#5ce6c0`,
  `#e848d5`,
  `#e6e848`
];

const WIZARD_NUMBER = 4;
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

// показывает блок с персонажем
const userDialog = document.querySelector(`.setup`);
// userDialog.classList.remove(`hidden`);

// показывает блок с похожими персонажами
// userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);

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

// ---------------------------- одеть Надежду ------------------------

// Открытие и закрытие модального окна
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = userDialog.querySelector(`.setup-close`);
const setupUserName = userDialog.querySelector(`.setup-user-name`);

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape` && !setupUserName.matches(`:focus`)) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  userDialog.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
  wizardCoat.addEventListener(`click`, getWizardCoatColor);
  wizardEyes.addEventListener(`click`, getWizardEyesColor);
  wizardFireball.addEventListener(`click`, getFireballColor);
};

const closePopup = function () {
  userDialog.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
  wizardCoat.removeEventListener(`click`, getWizardCoatColor);
  wizardEyes.removeEventListener(`click`, getWizardEyesColor);
  wizardFireball.removeEventListener(`click`, getFireballColor);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

// Проверка заполнения имени
setupUserName.addEventListener(`invalid`, function () {
  if (setupUserName.validity.valueMissing) {
    setupUserName.setCustomValidity(`Обязательное поле`);
  } else {
    setupUserName.setCustomValidity(``);
  }
});

setupUserName.addEventListener(`input`, function () {
  let valueLength = setupUserName.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    setupUserName.setCustomValidity(`Ещё ${MIN_NAME_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    setupUserName.setCustomValidity(`Удалите лишние ${valueLength - MAX_NAME_LENGTH} симв.`);
  } else {
    setupUserName.setCustomValidity(``);
  }
});

// Меняем цвет мантии глаз и фаербола
const wizardCoat = userDialog.querySelector(`.wizard-coat`);
const wizardEyes = userDialog.querySelector(`.wizard-eyes`);
const wizardFireball = userDialog.querySelector(`.setup-fireball-wrap`);

const getWizardCoatColor = function () {
  wizardCoat.style.fill = randomItem(COAT_COLORS);
  userDialog.querySelector(`input[name="coat-color"]`).value = wizardCoat.style.fill;
};

const getWizardEyesColor = function () {
  wizardEyes.style.fill = randomItem(EYES_COLORS);
  userDialog.querySelector(`input[name="eyes-color"]`).value = wizardEyes.style.fill;
};

const getFireballColor = function () {
  const fireballColor = randomItem(FIREBALLS);
  wizardFireball.setAttribute(`style`, `background-color:` + fireballColor);
  wizardFireball.querySelector(`input`).value = fireballColor;
};

const randomItem = function (items) {
  return items[Math.floor(Math.random() * items.length)];
};
