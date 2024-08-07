document.getElementById('addTodo').addEventListener('click', function() {
    let input = document.getElementById('todoInput').value;
    if (input) {
        let li = document.createElement('li');
        li.textContent = input;
        document.getElementById('todoList').appendChild(li);
        document.getElementById('todoInput').value = '';
    }
});
