const form = document.querySelector('.form-control');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = parseInt(document.getElementById('input').value);
  checkInput(inputValue);
});

function checkInput(inputValue) {
  if (inputValue < 0) {
    text.innerHTML = 'Enter a positive value!';
  } else if (inputValue % 2 == 0) {
    findEven(inputValue);
  } else if (inputValue % 2 != 0) {
    findOdd(inputValue);
  }
}

function findEven(value) {
  let even = [];
  for (let i = 1; i <= 3; i++) {
    if (value % 2 == 0) {
      value = value + 2;
    }
    even.push(value);
    text.innerHTML = even;
  }
}

function findOdd(value) {
  let odd = [];
  for (let i = 1; i <= 3; i++) {
    if (value % 2 != 0) {
      value = value + 2;
    }
    odd.push(value);
    text.innerHTML = odd;
  }
}
