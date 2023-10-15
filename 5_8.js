const form = document.getElementById('form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!validateEmail(emailInput.value)) {
    if (emailInput.value === '') {
      emailInput.setCustomValidity('Поле не должно быть пустым');
    } else if (!emailInput.value.includes('@')) {
      emailInput.setCustomValidity('Введите символ "@"');
    } else if (!emailInput.value.endsWith('.ru')) {
      emailInput.setCustomValidity('Введите домен "ru"');
    } else {
      emailInput.setCustomValidity('Введите корректный email адрес');
    }

    emailInput.reportValidity();
    emailInput.style.borderColor = 'red';
    emailInput.style.boxShadow = '0 0 5px red';
  } else {
    emailInput.setCustomValidity('');
    emailInput.style.borderColor = '';
    emailInput.style.boxShadow = '';
    form.submit();
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

emailInput.addEventListener('input', function() {
  emailInput.setCustomValidity('');
  emailInput.style.borderColor = '';
  emailInput.style.boxShadow = '';
});