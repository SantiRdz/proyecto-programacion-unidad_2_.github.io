let screen = document.getElementById('screen');

function appendToScreen(value) {
  if (screen.textContent === '0' && value !== '.') {
    screen.textContent = value;
  } else {
    screen.textContent += value;
  }
}

function clearScreen() {
  screen.textContent = '0';
}

function backspace() {
  if (screen.textContent.length === 1) {
    screen.textContent = '0';
  } else {
    screen.textContent = screen.textContent.slice(0, -1);
  }
}

function equals() {
  try {
    screen.textContent = eval(screen.textContent);
  } catch (error) {
    screen.textContent = 'Error';
  }
}
