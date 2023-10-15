const form = document.getElementById('form');
  const additionalInfoInput = document.getElementById('additionalInfo');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const additionalInfoValue = additionalInfoInput.value;

    if (!additionalInfoValue) {
      additionalInfoInput.setCustomValidity('Введите дополнительную информацию');
      additionalInfoInput.style.borderColor = 'red';
      additionalInfoInput.style.boxShadow = '0 0 13px red';
    } else {
      additionalInfoInput.setCustomValidity('');
      additionalInfoInput.style.borderColor = 'green';
      additionalInfoInput.style.boxShadow = '0 0 13px green';
    }
  });

  additionalInfoInput.addEventListener('input', function() {
    additionalInfoInput.setCustomValidity('');
    additionalInfoInput.style.borderColor = '';
    additionalInfoInput.style.boxShadow = '';
  });