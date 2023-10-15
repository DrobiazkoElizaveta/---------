const form = document.getElementById('form');
  const passwordInput = document.getElementById('password');
  const showPasswordCheckbox = document.getElementById('showPassword');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const passwordValue = passwordInput.value;

    if (!passwordValue) {
      passwordInput.setCustomValidity('Введите пароль');
      passwordInput.style.borderColor = 'red';
      passwordInput.style.boxShadow = '0 0 13px red';
    } else if (passwordValue.length < 4) {
      passwordInput.setCustomValidity('Пароль должен содержать не менее 4 символов');
      passwordInput.style.borderColor = 'red';
      passwordInput.style.boxShadow = '0 0 13px red';
    } else {
      passwordInput.setCustomValidity('');
      passwordInput.style.borderColor = 'green';
      passwordInput.style.boxShadow = '0 0 13px green';
    }
  });

  showPasswordCheckbox.addEventListener('change', function() {
    if (showPasswordCheckbox.checked) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
      passwordInput.classList.add('show-password');
    }
  });

  passwordInput.addEventListener('input', function() {
    passwordInput.setCustomValidity('');
    passwordInput.style.borderColor = '';
    passwordInput.style.boxShadow = '';
  });