const addTodo = document.querySelector('.add');
const list = document.querySelector('.todos');
const subButt = document.querySelector('.subButt');

const generateHTML = todo => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;
};

subButt.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addTodo.add.value.trim();

    if(todo.length){
        generateHTML(todo);
        addTodo.reset();
    };
});

addTodo.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addTodo.add.value.trim();

    if(todo.length){
        generateHTML(todo);
        addTodo.reset();
    };
});

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    };
});