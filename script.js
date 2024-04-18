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

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "deleteTask";

  // Check button
  const checkButton = document.createElement("button");
  checkButton.textContent = "Check";
  checkButton.className = "checkTask";

  listItem.appendChild(checkButton);
  listItem.appendChild(deleteButton);

  list.appendChild(listItem);

  // Add event listener for delete button
  deleteButton.addEventListener("click", function () {
    list.removeChild(listItem);
    saveTasks(); // Update local storage after removing task
  });

  // Add event listener for check button
  checkButton.addEventListener("click", function () {
    listItem.className = "checkTask"; // Toggle class for the clicked list item
    saveTasks(); // Update local storage after toggling checked state
  });
}

// Local storage
function saveTasks() {
  let tasks = [];
  list.querySelectorAll("li").forEach(function (item) {
    tasks.push(item.textContent.replace("Delete", "").trim());
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(createTaskElement);
}
