// Collect all the data from dom

// to-dos for this program

// 1. Error trap the input for creat task
// 2. Add the remaining functionality




const date = document.getElementById("date");
const allTasksDone = document.querySelector(".addTask");

const popUpAddTask = document.querySelector(".addTaskPopup");

function showPopUp() {
  console.log("clicked");
  // this is gonna show the pop up menu
  console.log(popUpAddTask);
  popUpAddTask.style.display = "flex";
}

function addTask() {

  
  
  // pop um menu add task
  const taskInput = document.querySelector(".taskInput");
  const taskInputText = taskInput.value;

  taskGen(taskInputText);

  taskInput.value = "";
  popUpAddTask.style.display = "none";

  
}

function taskDone(id) {
  console.log("taskDone", id);
}

function deleteTask(id) {
  console.log("delete Task", id);
}

function taskGen(task) {
  const toDoList = document.querySelectorAll(".tasks");

  const newTaskId = toDoList.length + 1;

  // Creatinf li
  const newTask = document.createElement("li");
  newTask.classList.add("tasks");
  newTask.id = newTaskId;

  // task text
  const textNode = document.createTextNode(task);
  newTask.appendChild(textNode);

  // div for buttons
  const buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("taskButtons");

  // done btn
  const doneBtn = document.createElement("button");
  doneBtn.classList.add("Done");
  doneBtn.textContent = "Done";
  doneBtn.onclick = () => taskDone(newTaskId);

  // delete btn
  const delBtn = document.createElement("button");
  delBtn.classList.add("delete");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => deleteTask(newTaskId);

  // assemble
  buttonWrapper.appendChild(doneBtn);
  buttonWrapper.appendChild(delBtn);
  newTask.appendChild(buttonWrapper);

  // appending to the dom
  const taskList = document.querySelector(".taskList").appendChild(newTask);

}
