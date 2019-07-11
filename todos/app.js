
const addForm = document.querySelector('.add');

const list = document.querySelector('.todos');

const search = document.querySelector('.search');

// add todo

const listTemplate = todo =>{
    
    const html = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                 <i class="far fa-trash-alt delete"></i>
            </li>
             `;

    list.innerHTML += html;
}

//submit event

addForm.addEventListener('submit', event =>{
    event.preventDefault();
    const todo = addForm.add.value.trim(); //trim to remove spaces before and after

    if(todo.length)
    {
        listTemplate(todo);
        addForm.reset(); // to delete the added text from the input field
    }
    
});

//delete todos

list.addEventListener('click', event =>{

    if(event.target.classList.contains('delete'))
    {
        event.target.parentElement.remove();
    }

});

//text- Matcher

const filterTodos = term =>{

    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo =>todo.classList.add('filtered'));

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo =>todo.classList.remove('filtered'));

};

//Keyup event

search.addEventListener('keyup', ()=>{

    const term = search.search.value.trim().toLowerCase();
    
    filterTodos(term);
    
    
});

