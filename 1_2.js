// Имя
const form = document.getElementById('form');
const nameInput = document.getElementById('name');

nameInput.addEventListener('input', function() {
  if (nameInput.value.trim() === '') {
    nameInput.setCustomValidity('Пожалуйста, заполните это поле.');
  } else if (nameInput.value.length < 2) {
    nameInput.setCustomValidity('Имя должно содержать минимум 2 символа.');
  } else {
    nameInput.setCustomValidity('');
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (nameInput.value.trim() === '') {
    input.style.borderColor = 'red';
    input.style.boxShadow = '0 0 13px red';
    nameInput.setCustomValidity('Пожалуйста, заполните это поле.');
  }

  if (!form.checkValidity()) {
  }
});

const input = document.getElementById('name');

  input.addEventListener('input', function() {
    if (input.validity.valid) {
      input.style.borderColor = 'green';
      input.style.boxShadow = '0 0 13px green';
    } else {
      input.style.borderColor = 'red';
      input.style.boxShadow = '0 0 13px red';
    }
  });
