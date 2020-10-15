'use strict';

(() => {
  const MAX_SIMILAR_WIZARD_COUNT = 4;
  const wizardTemplate = document.querySelector(`#similar-wizard-template`);

  const renderWizard = (wizard) => {
    const element = wizardTemplate.content.cloneNode(true);

    const wizardElement = element.querySelector(`.wizard`);
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    element.querySelector(`.setup-similar-label`).innerText = wizard.name;

    return element;
  };

  const similar = document.querySelector(`.setup-similar`);
  const similarList = document.querySelector(`.setup-similar-list`);

  window.render = (wizards) => {
    const takeNumber = wizards.length > MAX_SIMILAR_WIZARD_COUNT
      ? MAX_SIMILAR_WIZARD_COUNT
      : wizards.length;

    similarList.innerHTML = ``;

    for (let i = 0; i < takeNumber; i++) {
      similarList.appendChild(renderWizard(wizards[i]));
    }

    similar.classList.remove(`hidden`);
  };
})();
