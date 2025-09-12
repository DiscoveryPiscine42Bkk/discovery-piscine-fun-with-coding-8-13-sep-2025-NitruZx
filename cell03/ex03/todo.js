const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new-btn');

function saveTodos() {
    const todos = [];
    ftList.querySelectorAll('.todo-item').forEach(item => {
        todos.push(item.textContent);
    });
    document.cookie = 'ft_list_todos=' + JSON.stringify(todos);
}

function loadTodos() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        if (cookie.trim().startsWith('ft_list_todos=')) {
            const todos = JSON.parse(cookie.split('=')[1]);
            ftList.innerHTML = '';
            todos.forEach(text => addTodo(text, false));
            return;
        }
    }
}

function addTodo(text, save = true) {
    const todo = document.createElement('div');
    todo.className = 'todo-item';
    todo.textContent = text;
    
    todo.onclick = function() {
        if (confirm('Do you want to remove this TO DO?')) {
            todo.remove();
            saveTodos();
        }
    };
    
    ftList.prepend(todo);
    if (save) saveTodos();
}

newBtn.onclick = function() {
    const text = prompt('Enter a new TO DO:');
    if (text && text.trim()) {
        addTodo(text.trim());
    }
};

loadTodos();