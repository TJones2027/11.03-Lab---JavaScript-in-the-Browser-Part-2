window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  const input = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");


  addButton.addEventListener("click", addBtnClick);


  input.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {
      addBtnClick();
    }
  });
}

function addBtnClick() {
  const input = document.getElementById("taskInput");
  const list = document.getElementById("taskList");

  
  addTask(input.value.trim(), list);

  
  input.value = "";


  input.focus();
}

function addTask(taskText, list) {
  if (taskText === "") {
    alert("This is empty");
    return;
  }


  const li = document.createElement("li");
  li.textContent = taskText;

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✖";
  doneBtn.classList.add("done-btn");
  doneBtn.style.marginLeft = "10px";
  li.appendChild(doneBtn);

  list.appendChild(li);


  const allButtons = document.querySelectorAll(".done-btn");
  const lastButton = allButtons[allButtons.length - 1];
  lastButton.addEventListener("click", removeTask);
}

function removeTask(event) {
  const listItem = event.target.parentNode;   
  const orderedList = listItem.parentNode;    
  orderedList.removeChild(listItem);
}
