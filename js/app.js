
// Define Ui Variables
const listItems = document.querySelectorAll('li');
const deleteButton = document.querySelectorAll('.btn-delete');

const sportInput = document.querySelector('.input');
const submit = document.querySelector('.btn-submit');

// Add event listeners
for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', combinedOutputToggle);
}

for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', removeItem)

}

// Listen for submit button activation and call combinedHandler function
submit.addEventListener('click', combinedHandler);


// Create combinedOutputToggle function
function combinedOutputToggle(e) {
    console.log('Sport: ' + e.target.textContent + ', ID: ' + e.target.id);

    // Use toggle to switch classes
    e.target.classList.toggle("background-switch")

    // Remember how ternary operator works
    // REMEMBER HOW TO USE classList.contains & ternary operator
    // e.target.classList.contains("background-switch")
    // ? e.target.classList.remove("background-switch")
    // : e.target.classList.add("background-switch")

}

// Create removeItem function
function removeItem(e) {
    // Stop propagation to parent element
    e.stopPropagation();
    if(e.target.classList.contains('delete-item')) {
        if(confirm('Are you sure you want to delete sport?')) {
            e.target.parentElement.remove();
        }
    }
}

// Create combinedHandler function
function combinedHandler() {
    inputTest();
    addItem();
}

// Create inputTest function
function inputTest() {
    let x = sportInput.value;
    console.log(x);
}

// Create addItem function
function addItem(e) {

    // Get the input value
    const localInputValue = sportInput.value;
    
    // Create list element
    const newListItem = document.createElement('li');

    // Create button element
    const newButton = document.createElement('button');

    // Create list text content
    newListItem.textContent = localInputValue;

    // Add list attributes
    newListItem.id = localInputValue;

    // Create button text content
    newButton.textContent = 'Delete';

    // Add button attributes
    newButton.className = 'btn-delete delete-item';
    newButton.type = 'button';

    // Append button to list item
    newListItem.appendChild(newButton);

    // Append list item to parent element (list)
    const mainList = document.getElementsByClassName('sports-list')[0]; //Remember that you need to tell it which element of the array as getElementsByClassName returns a HTMLCollection!
    mainList.appendChild(newListItem);

    newButton.addEventListener('click', removeItem);
    newListItem.addEventListener('click', combinedOutputToggle);
}