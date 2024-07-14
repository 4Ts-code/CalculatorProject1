// CALCULATOR PROGRAM


let calculation = localStorage.getItem('calculation') || '';

showCalc();

function appendToDisplay (input) {
  calculation+= input;
  showCalc();
  saveCalculation();
}

function clearDisplay() {
  calculation= '';
  localStorage.removeItem('calculation');
  showCalc();
  saveCalculation();
}

function calculate() {
  try {
    calculation = eval(calculation);
  } catch (error) {
    calculation = 'Error';
  }
  
  
  showCalc();
  saveCalculation();
}

function showCalc () {
  document.querySelector('.js-show-calc')
    .innerHTML = `${calculation}`
}


function saveCalculation() {
  localStorage.getItem('calculation', calculation);
}