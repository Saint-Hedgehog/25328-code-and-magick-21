'use strict';

const COAT_COLORS = [
  `rgb(146, 100, 161)`,
  `rgb(215, 210, 55)`,
  `rgb(241, 43, 107)`,
  `rgb(101, 137, 164)`,
  `rgb(0, 0, 0)`,
  `rgb(215, 210, 55)`,
  `rgb(56, 159, 117)`,
  `rgb(241, 43, 107)`
];

const EYES_COLORS = [
  `red`,
  `orange`,
  `yellow`,
  `green`,
  `lightblue`,
  `blue`,
  `purple`
];

const FIREBALL_COLORS = [
  `#ee4830`,
  `#30a8ee`,
  `#5ce6c0`,
  `#e848d5`,
  `#e6e848`,
];

const {getRandomElement} = window.utils;

const wizard = {
  onEyesChange() { },
  onCoatChange() { }
};

const wizardElement = document.querySelector(`.setup-wizard`);

const wizardCoatElement = wizardElement.querySelector(`.wizard-coat`);
const onWizardCoatColorGet = (evt) => {
  const newColor = getRandomElement(COAT_COLORS);
  evt.target.style.fill = newColor;
  wizard.onCoatChange(newColor);
};

const wizardEyesElement = wizardElement.querySelector(`.wizard-eyes`);
const onWizardEyesColorGet = (evt) => {
  const newColor = getRandomElement(EYES_COLORS);
  evt.target.style.fill = newColor;
  wizard.onEyesChange(newColor);
};

const wizardFireballElement = document.querySelector(`.setup-fireball-wrap`);
const onWizardFireballColorGet = () => {
  const newColor = getRandomElement(FIREBALL_COLORS);
  wizardFireballElement.setAttribute(`style`, `background-color:` + newColor);
  wizardFireballElement.querySelector(`input`).value = newColor;
};

window.wizard = {
  setCoatChangeHandler(cb) {
    wizard.onCoatChange = cb;
  },
  setEyesChangeHandler(cb) {
    wizard.onEyesChange = cb;
  },
  onWizardCoatColorGet,
  onWizardEyesColorGet,
  onWizardFireballColorGet,
  wizardCoatElement,
  wizardEyesElement,
  wizardFireballElement,
};
