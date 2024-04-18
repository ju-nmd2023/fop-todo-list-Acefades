const createTaskButton = document.getElementById("createTask");
const taskInput = document.getElementById("taskInput");
const list = document.getElementById("list");

function createTask() {
  const task = taskInput.value.trim();
  if (task) {
    createTaskElement();
    taskInput.value = "";
  } else {
    alert("Enter your task");
  }
}

createTaskButton.addEventListener("click", createTask);

function createTaskElement(task) {
  // Implementation of createTaskElement function goes here
}
