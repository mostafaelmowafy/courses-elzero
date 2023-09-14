let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array To Store The Tasks
let arrayOfTasks = [];
// window.localStorage.clear()
// Check if Theres Tasks In Local Storage
if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
    addElementsToPageFrom(arrayOfTasks);
    }

// Trigger Get Data From Local Storage Function


// Add Task
submit.onclick = function () {
    if (input.value !== "") {
      addTaskToArray(input.value); // Add Task To Array Of Tasks
      input.value = ""; // Empty Input Field
    }
};

tasksDiv.addEventListener("click", (e) => {
    // Delete Button
    if (e.target.classList.contains("del")) {
        // Remove Task From Local Storage
        // deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
        arrayOfTasks.pop(e.target.parentElement.getAttribute("data-id"))
        addDataToLocalStorageFrom(arrayOfTasks)
        // Remove Element From Page
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains("task")){
        e.target.classList.toggle("done");    // class = "done " don't apply on task
        
        toggleStatusTaskWith(e.target.getAttribute("data-id"));
    }
});

function addTaskToArray(taskText) {
    // Task Data
    const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
    };
    // Push Task To Array Of Tasks
    arrayOfTasks.push(task);
    // Add Tasks To Page
    addElementsToPageFrom(arrayOfTasks);
    // Add Tasks To Local Storage
    addDataToLocalStorageFrom(arrayOfTasks);    

}

function addElementsToPageFrom(arrayOfTasks) {
    // Empty Tasks Div
    tasksDiv.innerHTML = "";
    // Looping On Array Of Tasks
    arrayOfTasks.forEach((task) => {
      // Create Main Div
        let div = document.createElement("div");
        div.className = "task";
        // Check If Task is Done
        if (task.completed) {
            div.className = "task done";
        }
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));
        // Create Delete Button
        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("Delete"));
        // Append Button To Main Div
        div.appendChild(span);
        // Add Task Div To Tasks Container
        tasksDiv.appendChild(div);
    });
}

function addDataToLocalStorageFrom(arrayOfTasks) {
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}
// function getDataFromLocalStorage() {
//     // let data = window.localStorage.getItem("tasks");
//     if (arrayOfTasks !== "") {
//         // let tasks = JSON.parse(data);
//         addElementsToPageFrom(arrayOfTasks);
//     }
// }

function toggleStatusTaskWith(taskId) {
    for (let i = 0; i < arrayOfTasks.length; i++) {
        if (arrayOfTasks[i].id == taskId) {
        arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
        }
    }
    addDataToLocalStorageFrom(arrayOfTasks);
}