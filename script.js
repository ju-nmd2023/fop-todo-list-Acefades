const createTaskButton = document.getElementById("createTask");
const taskInput = document.getElementById("taskInput");
const list = document.getElementById("list");

function createTask() {
  const task = taskInput.value.trim(); // not storing blankspace
  if (task) {
    createTaskElement(task); // pass the task to createTaskElement
    taskInput.value = "";
  } else {
    alert("Enter your task");
  }
}

createTaskButton.addEventListener("click", createTask);

function createTaskElement(task) {
  const listItem = document.createElement("li");
  listItem.textContent = task; // adds task from above to "li" element

  list.appendChild(listItem);
}

