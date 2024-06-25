
// Define Ui Variables
const listItems = document.querySelectorAll('li');
const deleteButton = document.querySelectorAll('.btn-delete');

const sportInput = document.querySelector('.input');
const submit = document.querySelector('.btn-submit');

// Add event listeners
for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function(e)
    {
        console.log('Sport: ' + e.target.textContent + ', ID: ' + e.target.id);
    });
}

for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', removeItem)

}

submit.addEventListener('click', addItem);

sportInput.addEventListener('input', () => {
    let inputValue = sportInput.value;
    console.log(inputValue);
})

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

// Create addItem function
function addItem(e) {
    
    // Create list element
    const newListItem = document.createElement('li');

    // Create button element
    const newButton = document.createElement('button');

    // Add list attributes
    newListItem.id = inputValue;

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
}