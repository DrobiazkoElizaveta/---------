const form = document.getElementById('form');
  const dateInput = document.getElementById('date');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const dateValue = dateInput.value;
    const isValidDate = validateDate(dateValue);
    
    if (!dateValue) {
      dateInput.setCustomValidity('Введите дату');
      dateInput.style.borderColor = 'red';
      dateInput.style.boxShadow = '0 0 13px red';
    } else if (!isValidDate) {
      dateInput.setCustomValidity('Введите корректную дату в формате ДД/ММ/ГГГГ');
      dateInput.style.borderColor = 'red';
      dateInput.style.boxShadow = '0 0 13px red';
    } else {
      dateInput.setCustomValidity('');
      dateInput.style.borderColor = 'green';
      dateInput.style.boxShadow = '0 0 13px green';
    }
  });

  dateInput.addEventListener('input', function() {
    dateInput.setCustomValidity('');
    dateInput.style.borderColor = '';
    dateInput.style.boxShadow = '';
  });

  function validateDate(dateString) {
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dateRegex.test(dateString)) {
      return false;
    }
    
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    const date = new Date(year, month, day);
    
    if (isNaN(date.getTime())) {
      return false;
    }
    
    return true;
  }