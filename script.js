// Gets the submit button
const submit = document.getElementById('submit');
console.log(submit);
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
    
    // Creates a img element
    const img = document.createElement('img');
    
    // Sets the width to 150px
    img.setAttribute('width', '150px');

    // Determines the type of image query
    const type = (radioValue === 'image') ? 'gifs' : 'stickers';

    // Calls the Giphy API for the src given the values
    fetch('http://api.giphy.com/v1' + '/' + type + '/search?q=' + queryValue + '&api_key=oirHQh42vJFRokoi7r9awMZhOudB8UZL&rating=g&limit=1&offset=' + offsetValue)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Sets the src of the img element
            img.src = data.data[0].images.original.url;
        })
        .catch(error => console.error('Error:', error))

    // Adds the p element to the div element
    div.appendChild(img);

    // Returns the div element
    return div;
}