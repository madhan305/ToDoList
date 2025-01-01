document.getElementById("add-task-btn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("task-list");

  // Create list item
  const li = document.createElement("li");
  li.className = "task-item";
  li.innerHTML = `
    <span>${taskValue}</span>
    <button class="delete-btn">Delete</button>
  `;

  // Add delete functionality
  li.querySelector(".delete-btn").addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Append to task list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = "";
}
