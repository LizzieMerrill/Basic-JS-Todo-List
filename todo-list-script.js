//JavaScript to add new list item to HTML file
let mainList = document.querySelector('ul');

function addItem(){
let newLI = document.createElement('li');
newLI.innerHTML = prompt("Enter a new to-do list item: ");
newLI.setAttribute('class', "thingToDo");
let mainList = document.querySelector('ul');
mainList.appendChild(newLI);
}

mainList.addEventListener('click', function removeItem(){
        document.querySelector('.thingToDo').remove();
    });