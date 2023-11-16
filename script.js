// Gets the submit button
const submit = document.getElementById('submit');
// Gets the input box
const input = document.getElementById('query');
// Gets the offset box
const offset = document.getElementById('offset');

// Gets the image container
const imageContainer = document.getElementById('right-panel');

// Listens to the submit button
submit.addEventListener('click', function(e) {
    // Gets the radio element that is selected
    const radio = document.querySelector('input[type=radio][name=image-type]:checked');

    // Prevents the default action
    e.preventDefault();
    // Gets the value of the input box
    const queryValue = input.value;
    // Gets the value of the offset box
    const offsetValue = offset.value;
    // Gets the value of the radio element
    const radioValue = radio.value;

    // Removes the innerHTML of the image container
    imageContainer.innerHTML = '';

    // Replaces the image container with the values
    imageContainer.appendChild(createImageContainer([radioValue, queryValue, offsetValue]));
});

// Function that returns a container filled with values
function createImageContainer([radioValue, queryValue, offsetValue]) {
    // Creates a div element
    const div = document.createElement('div');
    
    // Loops through the array of required values
    for (let i = 0; i < 3; i++) {
        // Creates a p element
        const p = document.createElement('p');
        // Creates a text node
        const text = document.createTextNode([queryValue, offsetValue, radioValue][i]);
        // Adds the text node to the p element
        p.appendChild(text);
        // Adds the p element to the div element
        div.appendChild(p);
    }

    // Returns the div element
    return div;
}