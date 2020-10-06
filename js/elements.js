'use strict';

(() => {

  const FIREBALLS = [
    `#ee4830`,
    `#30a8ee`,
    `#5ce6c0`,
    `#e848d5`,
    `#e6e848`
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

  const WIZARD_NUMBER = 4;

  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 25;

  const ESC = 27;
  const ENTER = 13;

  const userDialog = document.querySelector(`.setup`);
  const wizardCoat = userDialog.querySelector(`.wizard-coat`);
  const wizardEyes = userDialog.querySelector(`.wizard-eyes`);
  const wizardFireball = userDialog.querySelector(`.setup-fireball-wrap`);

  const setupUserName = userDialog.querySelector(`.setup-user-name`);

  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = userDialog.querySelector(`.setup-close`);

  const dialogHandle = userDialog.querySelector(`.upload`);

  window.elements = {
    FIREBALLS,
    COAT_COLORS,
    EYES_COLORS,
    WIZARD_NAMES,
    WIZARD_SURNAMES,
    WIZARD_NUMBER,
    MIN_NAME_LENGTH,
    MAX_NAME_LENGTH,
    ESC,
    ENTER,
    userDialog,
    wizardCoat,
    wizardEyes,
    wizardFireball,
    setupUserName,
    setupOpen,
    setupClose,
    dialogHandle,
  };

})();
