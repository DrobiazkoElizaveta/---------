const form = document.getElementById('form');
const checkbox = document.getElementById('checkbox');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!checkbox.checkValidity()) {
    checkbox.nextElementSibling.textContent = checkbox.validationMessage;
    checkbox.style.outline = '1px solid red';
  } else {
    checkbox.nextElementSibling.textContent = '';
    checkbox.style.outline = '';
  }

  if (checkbox.checkValidity()) {
    form.submit();
  }
});

checkbox.addEventListener('input', function() {
  checkbox.nextElementSibling.textContent = '';
});