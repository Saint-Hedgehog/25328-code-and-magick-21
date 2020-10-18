'use strict';

const {load} = window.backend;
const {setEyesChangeHandler, setCoatChangeHandler} = window.wizard;

let coatColor = `rgb(101, 137, 164)`;
let eyesColor = `black`;

let wizards = [];

const getRank = (wizard) => {
  let rank = 0;

  if (wizard.colorCoat === coatColor) {
    rank += 2;
  }
  if (wizard.colorEyes === eyesColor) {
    rank += 1;
  }

  return rank;
};

const namesComparator = (left, right) => {
  if (left > right) {
    return 1;
  } else if (left < right) {
    return -1;
  } else {
    return 0;
  }
};

const updateWizards = window.debounce(() => {
  window.render(wizards.sort((left, right) => {
    let rankDiff = getRank(right) - getRank(left);
    if (rankDiff === 0) {
      rankDiff = namesComparator(left.name, right.name);
    }
    return rankDiff;
  }));
});

setEyesChangeHandler((color) => {
  eyesColor = color;
  updateWizards();
});

setCoatChangeHandler((color) => {
  coatColor = color;
  updateWizards();
});

const onSuccess = (data) => {
  wizards = data;
  updateWizards();
};

const onError = (errorMessage) => {
  window.utils.createErrorMessage(errorMessage);
};

load(onSuccess, onError);
