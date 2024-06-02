
// Array para armazenar as tarefas
let tasks = [];

// Referência aos elementos do DOM
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Função para renderizar as tarefas na lista
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) {
            li.classList.add('completed');
        }
        li.addEventListener('click', () => toggleTask(index));
        taskList.appendChild(li);
    });
}

// Função para adicionar uma nova tarefa
function addTask(text) {
    tasks.push({ text, completed: false });
    renderTasks();
}

// Função para alternar o status de uma tarefa entre concluída e não concluída
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Event listener para o formulário de adicionar tarefa
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    } else {
        alert('Por favor, insira uma tarefa válida.');
    }
});

// Renderizar as tarefas iniciais
renderTasks();