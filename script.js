// Collect all the data from dom

// to-dos for this program

// 1. Error trap the input for creat task - Done
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
  
  if(taskInputText.length === 0){
    taskInput.value = "";
    popUpAddTask.style.display = "none";
    return alert("Invalid Input ! Please try again")
  } 

  taskGen(taskInputText);

  taskInput.value = "";
  popUpAddTask.style.display = "none";

}

// what happens when the user presses done
function taskDone(finishedTask) {
  finishedTask.remove()

  removeTaskGen(finishedTask.firstChild.textContent)
}

function deleteTask(task) {
  task.remove()
}


// this function genarates a task and puts it in the completed section
function removeTaskGen(textContent) {
  const completedTaskBox = document.querySelectorAll(".completedTasks")

  // create li
  const newTask = document.createElement("li")
  newTask.classList.add("tasks")

  //del button
  const delBtn = document.createElement("button")
  delBtn.classList.add("taskButtons")

  // add texts 
  let textNode = document.createTextNode(`${textContent} ✅`)
  newTask.appendChild(textNode)

  const taskList = document.querySelector(".CompletedTaskList").appendChild(newTask)
  
}

function taskGen(task) {

  // Creatinf li
  const newTask = document.createElement("li");
  newTask.classList.add("tasks");

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
  doneBtn.onclick = () => taskDone(newTask);

  // delete btn
  const delBtn = document.createElement("button");
  delBtn.classList.add("delete");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => deleteTask(newTask);

  // assemble
  buttonWrapper.appendChild(doneBtn);
  buttonWrapper.appendChild(delBtn);
  newTask.appendChild(buttonWrapper);

  // appending to the dom
  document.querySelector(".taskList").appendChild(newTask);

}
