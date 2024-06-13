function solveProblems() {
    const rangeInput = document.getElementById('range').value;
    const numbers = rangeInput.split(',').map(num => parseInt(num.trim()));
  
    let resultHTML = '';
  
    resultHTML += '<h2>1. Números primos:</h2>';
    numbers.forEach(num => {
      if (isPrime(num)) {
        resultHTML += `<p>${num} es primo.</p>`;
      } else {
        resultHTML += `<p>${num} no es primo.</p>`;
      }
    });
  
    resultHTML += '<h2>2. Múltiplos de 5:</h2>';
    numbers.forEach(num => {
      if (num % 5 === 0) {
        resultHTML += `<p>${num} es múltiplo de 5.</p>`;
      } else {
        resultHTML += `<p>${num} no es múltiplo de 5.</p>`;
      }
    });
  
    resultHTML += '<h2>3. Múltiplos de 10:</h2>';
    numbers.forEach(num => {
      if (num % 10 === 0) {
        resultHTML += `<p>${num} es múltiplo de 10.</p>`;
      } else {
        resultHTML += `<p>${num} no es múltiplo de 10.</p>`;
      }
    });
  
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const numberNames = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez'];
    resultHTML += `<h2>4. Número aleatorio: ${numberNames[randomNumber - 1]}</h2>`;
  
    const randomCount = Math.floor(Math.random() * 10) + 1;
    resultHTML += `<h2>5. Imprimir "Programación es mi clase preferida" ${randomCount} veces:</h2>`;
    for (let i = 0; i < randomCount; i++) {
      resultHTML += '<p>Programación es mi clase preferida.</p>';
    }
  
    document.getElementById('result').innerHTML = resultHTML;
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  