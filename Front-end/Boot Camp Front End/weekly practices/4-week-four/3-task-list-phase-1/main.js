const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-input");
const submit = document.getElementById("new-task-submit");
const taskList = document.getElementById("todosContainer");
const deleteButton = document.getElementById("delete");
const error = document.getElementById("errorContainer");
let newtask_tag = document.createElement("li");
newtask_tag.classList.add("todos__todo");
// Task item scheme:
{
  /* <li class="todos__todo">
${newTask} <img src="../assets/trash.svg" class="todos__todo--trash" id="delete" alt="trash" />
</li> */
}

form.addEventListener("submit", (e) => {
  newtask_tag.style.textDecoration = "none";
  newtask_tag.style.backgroundColor = "none";
  e.preventDefault();
  const newTask = input.value;

  if (newTask === "") {
    error.style.setProperty("display", "block");
    error.style.setProperty("animation", "fadeIn 0.3s");
    error.style.setProperty("opacity", "100");
    setTimeout(() => {
      error.style.setProperty("display", "none");
    }, 2000);
    return;
  }

  // TODO: Add task to taskList
  newtask_tag.innerHTML = `${newTask} <img src="./assets/trash.svg" class="todos__todo--trash" id="delete" alt="trash" />`;
  taskList.append(newtask_tag);
  // TODO: Reset form input
  input.value = "";
});

taskList.addEventListener("click", (e) => {
  // TODO: Complete task when clicked on task item
  e.target.style.textDecoration = "line-through";
  e.target.style.backgroundColor = "#c9c8c8";
  // TODO: Delete task item
  if (e.target.id == "delete") {
    newtask_tag.remove();
  }
});
