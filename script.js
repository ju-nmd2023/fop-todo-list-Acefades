const createTaskButton = document.getElementById("createTask");
const taskInput = document.getElementById("taskInput");
const list = document.getElementById("list");

loadTasks();

function createTask() {
  const task = taskInput.value.trim(); // not storing blankspace
  if (task) {
    createTaskElement(task); // pass the task to createTaskElement
    taskInput.value = "";
    saveTasks();
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

//local storage
function saveTasks() {
  let tasks = [];
  list.querySelectorAll("li").forEach(function (item) {
    tasks.push(item.textContent.trim());
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(createTaskElement);
}
