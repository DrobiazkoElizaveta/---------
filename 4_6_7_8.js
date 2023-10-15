const form = document.getElementById('form');
  const checkboxInputs = document.querySelectorAll('.checkbox-input');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const checkedCount = Array.from(checkboxInputs).filter(input => input.checked).length;

    if (checkedCount === 0) {
      alert('Выберите хотя бы один интерес');
    } else if (checkedCount > 2) {
      alert('Выберите не более двух интересов');
    } else {
    }
  });