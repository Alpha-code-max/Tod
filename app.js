const form = document.querySelector('.add');
const todoLIst = document.querySelector('.todos')
const search = document.querySelector('.search input')



form.addEventListener('submit', e => {
    e.preventDefault();

    const newTodo = form.add.value.trim();

    if (newTodo.length) {
        const listTodo= `<li class="list-group-item d-flex mb-3 justify-content-between
                            align-items-center text-light">
                            <span>${newTodo}</span>
                            <img src="/rubbish-bin.svg" alt="" style="width: 25px; filter: invert(.8);">
                        </li>`
                        todoLIst.innerHTML += listTodo;
    }

    form.reset();
})

todoLIst.addEventListener('click', e => {
    e.preventDefault()
    
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
    }
})

const searchFunction = function (term) {
    
    const Li = Array.from(todoLIst.children)

    Li.filter(li => !li.textContent.includes(term))
    .forEach(li => li.classList.add('filtered'))

    Li.filter(li => li.textContent.includes(term))
    .forEach(li => li.classList.remove('filtered'))
    }


const term = search.value.trim();
search.addEventListener('keyup', () => {

    const term = search.value.trim();
   searchFunction(term);
})