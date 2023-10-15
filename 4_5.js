const form = document.getElementById('form');
  const passportInput = document.getElementById('passport');
  const passportPattern = /^[0-9]{10}$/;

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const passportValue = passportInput.value;

    if (!passportValue) {
      passportInput.setCustomValidity('Введите номер паспорта');
      passportInput.style.borderColor = 'red';
      passportInput.style.boxShadow = '0 0 13px red';
    } else if (!passportPattern.test(passportValue)) {
      passportInput.setCustomValidity('Номер паспорта должен состоять из 10 цифр');
      passportInput.style.borderColor = 'red';
      passportInput.style.boxShadow = '0 0 13px red';
    } else {
      passportInput.setCustomValidity('');
      passportInput.style.borderColor = 'green';
      passportInput.style.boxShadow = '0 0 13px green';
    }
  });

  passportInput.addEventListener('input', function() {
    passportInput.setCustomValidity('');
    passportInput.style.borderColor = '';
    passportInput.style.boxShadow = '';
  });