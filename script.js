function addTask() { 
    var taskInput = document.getElementById("taskinput");
    var taskList = document.getElementById("tasklist");
    var taskText = taskInput.value;
    if (taskText.trim() !== "") {
      // Check for duplicate task
     if (isDuplicateTask(taskText)) {
        alert("Task already exists. Please enter a different task.");
        return;
      }
  
      var taskItem = document.createElement("list");
      taskItem.className = "task-item";
  
     var taskTextInput = document.createElement("input");
      taskTextInput.type = "text";
      taskTextInput.value = taskText;
      taskTextInput.className="container";
  
      var deleteButton = document.createElement("button");
      deleteButton.textContent ="delete";
      deleteButton.className="container2";
      deleteButton.addEventListener("click", function() {
        deleteTask(taskItem);
      });
  
      taskItem.appendChild(taskTextInput);
      // taskItem.appendChild(editButton);
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
  
       taskInput.value = "";
    }
  }
  
  // Function to check if a task already exists
  function isDuplicateTask(taskText) {
    var taskItems = document.getElementsByClassName("task-item");
    for (var i = 0; i < taskItems.length; i++) {
      var taskTextInput = taskItems[i].querySelector("input[type='text']");
      if (taskTextInput.value.toLowerCase() === taskText.toLowerCase()) {
        return true;
      }                                                                                                                                 
    }
    return false;
  }
  // Function to delete a task
  function deleteTask(taskItem) {
    var confirmDelete = confirm("Are you sure you want to delete the task?");
    if (confirmDelete) {
      taskItem.remove();
    }
  }
  
  // Event listener for the add button
  var addButton = document.getElementById("btn");
  addButton.addEventListener("click", addTask);

  
 
