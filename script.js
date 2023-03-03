const circle = document.querySelector('.circle');
const inputBox = document.querySelector('.input-box');
const inputField = document.querySelector('#input-field');

circle.addEventListener('click', function() {
  inputBox.style.display = 'block';
});

inputField.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    checkInput();
  }
});

// function checkInput() {
//   const word = inputField.value.trim();
//   if (word.toLowerCase() === 'correct') {
//     circle.style.backgroundColor = '#4CAF50';
//     inputBox.style.display = 'none';
//   } else {
//     inputField.style.outline = '2px solid red';
//   }
// }

alert ("hello");
