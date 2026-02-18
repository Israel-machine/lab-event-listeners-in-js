// Handle Button Clicks
const body = document.querySelector("body");
// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  body.style.backgroundColor = 'rgb(255, 0, 0)'
  // Implement the function to change background color
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  body.style.backgroundColor = ''
  // Implement the function to reset background color
}

// Capture Keyboard Input

// Function to display the key pressed by the user

function displayKeyPress(event) {
  // Implement the function to display key pressed
  const textInput = document.getElementById("keyPressDisplay")
  textInput.textContent = 'Key pressed: ' + event.key;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const textInput = document.getElementById("textInput")
  const display = document.getElementById("textInputDisplay")
  display.textContent = 'You typed: '+ textInput.value;
  // Implement the function to display user input
}

// Attach Event Listeners
function setupEventListeners() {
  // Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}