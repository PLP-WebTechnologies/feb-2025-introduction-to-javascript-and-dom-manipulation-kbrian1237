// Get references to the elements
const greeting = document.getElementById('greeting');
const changeTextButton = document.getElementById('changeTextButton');
const styleButton = document.getElementById('styleButton');
const addElementButton = document.getElementById('addElementButton');
const elementContainer = document.getElementById('elementContainer');

// 1. Change Text Dynamically
changeTextButton.addEventListener('click', function() {
    greeting.textContent = 'Text changed by JavaScript!';
});

// 2. Modify CSS Styles
styleButton.addEventListener('click', function() {
    greeting.classList.toggle('highlight'); // Add or remove the 'highlight' class
});

// 3. Add or Remove an Element
addElementButton.addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This was added dynamically!';
    elementContainer.appendChild(newParagraph);
});
