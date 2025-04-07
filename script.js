/*
Copyright 2025, SHIVANSH MISHRA

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

let area = document.querySelector('.area');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let divide = document.querySelector('.divide');
let multiply = document.querySelector('.multiply');
let total = document.querySelector('.total');
let ac = document.querySelector('.ac');
let c = document.querySelector('.c');
let root = document.querySelector('.root');
let factorial = document.querySelector('.factorial');
let point = document.querySelector('.point');

// Function to append characters in display and calculating factorial
function appendToDisplay(char) {
  area.value += char;
}

function calc_factorial(val) {
  let result = 1;
  for (let i = 2; i <= val; i++) {
    result *= i;
  }
  return result;
}

// Number and operator button listeners
one.addEventListener('click', () => appendToDisplay('1'));
two.addEventListener('click', () => appendToDisplay('2'));
three.addEventListener('click', () => appendToDisplay('3'));
four.addEventListener('click', () => appendToDisplay('4'));
five.addEventListener('click', () => appendToDisplay('5'));
six.addEventListener('click', () => appendToDisplay('6'));
seven.addEventListener('click', () => appendToDisplay('7'));
eight.addEventListener('click', () => appendToDisplay('8'));
nine.addEventListener('click', () => appendToDisplay('9'));
zero.addEventListener('click', () => appendToDisplay('0'));

plus.addEventListener('click', () => appendToDisplay('+'));
minus.addEventListener('click', () => appendToDisplay('-'));
multiply.addEventListener('click', () => appendToDisplay('*'));
divide.addEventListener('click', () => appendToDisplay('/'));
point.addEventListener('click', () => appendToDisplay('.'));

// AC - clear everything
ac.addEventListener('click', () => {
  area.value = '';
});

// C - remove last character
c.addEventListener('click', () => {
  area.value = area.value.slice(0, -1);
});


factorial.addEventListener('click', () => appendToDisplay('!'));

// √ - square root
root.addEventListener('click', () => {
  if (area.value !== '') {
    area.value = Math.sqrt(Number(area.value));
  }
});

total.addEventListener('click', () => {
  try {
    if (area.value.endsWith('!')) {
      let num = Number(area.value.slice(0, -1));
      if (isNaN(num) || num < 0) {
        area.value = 'Error';
      } 
      else {
        area.value = calc_factorial(num);
      }
    } 
    else {
      area.value = eval(area.value);
    }
  } catch (err) {
    area.value = 'Error';
  }
});
