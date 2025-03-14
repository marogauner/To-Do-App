const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function AddTask() {
  if (inputBox.value === "") {
    return;
  }
  // Create list index
  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);
  inputBox.value = "";
  // Add delete button
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
  SaveData();
}

function Update() {
  // Task Processing
  listContainer.addEventListener(
    "click",
    function (e) {
      const element = e.target;
      if (element.tagName === "LI") {
        // Add "checked" class tag.
        // If already there it gets removed
        element.classList.toggle("checked");
      } else if (element.tagName === "SPAN") {
        element.parentElement.remove();
      }
      SaveData();
    },
    false
  );

  // Submit Task via Enter
  inputBox.addEventListener(
    "keypress",
    function (e) {
      if (event.key === "Enter") {
        AddTask();
      }
    },
    false
  );

  // Load Data on Website load
  LoadData();
}

// save/load
function SaveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function LoadData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

Update();
