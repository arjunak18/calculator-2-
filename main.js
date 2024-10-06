function allClear() {
  document.getElementById("text").value = "";
  document.getElementById("text").scrollLeft = 0;  // Reset scroll when clearing
}

function deletefunc() {
  let InputBoxValue = document.getElementById("text").value;
  InputBoxValue = InputBoxValue.substring(0, InputBoxValue.length - 1);
  document.getElementById("text").value = InputBoxValue;
  autoScrollToEnd(); // Scroll after deleting
}

function addOperator(operator) {
  let InputBoxValue = document.getElementById("text").value;
  let lastChar = InputBoxValue.charAt(InputBoxValue.length - 1);

  // Ensure the last character is not an operator before adding a new one
  if (!["%", "/", "*", "+", "-", "."].includes(lastChar)) {
      document.getElementById("text").value = InputBoxValue + operator;
  }
  autoScrollToEnd();  // Scroll to the right when a new operator is added
}

function addnumber(number) {
  let InputBoxValue = document.getElementById("text").value;
  document.getElementById("text").value = InputBoxValue + number;
  autoScrollToEnd();  // Scroll to the right when a new number is added
}

function calculate() {
  let InputBoxValue = document.getElementById("text").value;

  try {
      // Evaluate the expression
      let result = eval(InputBoxValue);
      document.getElementById("text").value = result;
      autoScrollToEnd(); // Scroll after calculation
  } catch (error) {
      document.getElementById("text").value = "Invalid expression";
  }
}

function autoScrollToEnd() {
  const input = document.getElementById('text');
  input.scrollLeft = input.scrollWidth;  // Scroll to the far right
}

function handleKeyPress(event) {
  const key = event.key;

  if (key >= '0' && key <= '9') {
      addnumber(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      addOperator(key);
  } else if (key === '.') {
      addOperator(key);
  } else if (key === 'Enter') {
      event.preventDefault(); // Prevent default form submission behavior
      calculate(); // Perform calculation
  } else if (key === 'Backspace') {
      deletefunc();
  } else if (key === 'Delete') {
      allClear();
  }
}

document.addEventListener('keydown', handleKeyPress);

document.addEventListener('contextmenu', event => event.preventDefault());  // prevents the right clicks

document.onkeydown = (e) => {
  if (e.key == 123) {  // F12 to open dev tools
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'I') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'C') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'J') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.key == 'U') {
      e.preventDefault();
  }
};
