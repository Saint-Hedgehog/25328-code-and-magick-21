'use strict';

(() => {

  const {COAT_COLORS, EYES_COLORS, FIREBALLS, userDialog, wizardCoat, wizardEyes, wizardFireball} = window.elements;

  // Меняем цвет мантии глаз и фаербола
  const getWizardCoatColor = () => {
    wizardCoat.style.fill = randomItem(COAT_COLORS);
    userDialog.querySelector(`input[name="coat-color"]`).value = wizardCoat.style.fill;
  };

  const getWizardEyesColor = () => {
    wizardEyes.style.fill = randomItem(EYES_COLORS);
    userDialog.querySelector(`input[name="eyes-color"]`).value = wizardEyes.style.fill;
  };

  const getFireballColor = () => {
    const fireballColor = randomItem(FIREBALLS);
    wizardFireball.setAttribute(`style`, `background-color:` + fireballColor);
    wizardFireball.querySelector(`input`).value = fireballColor;
  };

  const randomItem = (items) => items[Math.floor(Math.random() * items.length)];

  window.colorize = {
    getWizardCoatColor,
    getWizardEyesColor,
    getFireballColor,
  };
})();

