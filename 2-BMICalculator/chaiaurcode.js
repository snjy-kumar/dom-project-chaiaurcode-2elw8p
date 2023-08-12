const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give me valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give me valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi <= 18) {
      results.innerHTML = `Under Weight: ${bmi}`;
    } else if (bmi > 18 && bmi <= 24.9) {
      results.innerHTML = `Normal Range: ${bmi}`;
    } else {
      results.innerHTML = `Overweight: ${bmi}`;
    }
  }
});
