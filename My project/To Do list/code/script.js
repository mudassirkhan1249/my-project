let task = document.getElementById("task");
let taskList = document.getElementById("taskList");
let clearbtn = document.getElementById("clearAll");
let btn = document.getElementsByClassName("btn");

function addTask() {
  if (task.value == "") {
    alert("Please enter a task.");
    return;
  }

  let li = document.createElement("li");
  li.innerText = task.value;

  let deletebtn = document.createElement("button");
  deletebtn.innerText = "❌";

  // ✅ Add delete button *inside* li
  li.appendChild(deletebtn);

  // ✅ Then add full li to the task list
  taskList.appendChild(li);

  task.value = "";

  li.addEventListener("click", () => {
    li.style.borderBottom == "1rem solid green";
  });

  deletebtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this task?")) {
      taskList.removeChild(li);
    }
  });

 li.addEventListener("dblclick", () => {
  if(confirm("Are you sure you want to mark this task as completed?")) {
    li.style.textDecoration = "line-through";
    li.style.color = "gray";
  }});
}

// ✅ Add event listener to the clear button
function clearAll() {
  if (confirm("Are you sure you want to clear all tasks?")) {
    taskList.innerHTML = "";
    task.value = "";
    alert("All tasks cleared.");
  }
}

