let theInput = document.querySelector(".add-task input"),
theAddButton = document.querySelector(".add-task .plus"),
tasksContainer = document.querySelector(".tasks-content"),
tasksCount = document.querySelector(".tasks-count span"),
tasksCompleted = document.querySelector(".tasks-completed span"),
inputArray = [];

// localStorage.clear()
window.onload = function () {
    theInput.focus();
    if(window.localStorage.getItem("taskArray")){
        let noTasksMsg = document.querySelector(".no-tasks-message");

        // Check If Span With No Tasks Message Is Exist
        if (document.body.contains(document.querySelector(".no-tasks-message"))) {
            // Remove No Tasks Message
            noTasksMsg.remove();
        }
        // if (tasksContainer.childElementCount == 0) {
        //     createNoTasks();
        // }
        createAllTask()
    }
};

// Create no-tasks-message
function createNoTasks(){
    let creatNoTaskMsg = document.createElement("span"),
    creatNoTaskTextNode = document.createTextNode( "No tasks to show" );

    creatNoTaskMsg.appendChild(creatNoTaskTextNode);
    creatNoTaskMsg.className = 'no-tasks-message';
    tasksContainer.appendChild(creatNoTaskMsg)

}
// Create DeleteAll Button & CompleteAll Button
function createButtons(){
    if(document.querySelector(".deleteAll")){
        document.querySelector(".buttons").remove()
    }
    let div = document.createElement("div");
    div.className = "buttons"

    // Creat DeleteAll Button
    let deleteAll = document.createElement("span");
    deleteAll.className = 'deleteAll';
    deleteAll.innerText ="DeleteAll"

    // Creat CompleteAll Button
    let completeAll=  document.createElement('span');
    completeAll.className="completeAll";
    completeAll.innerHTML='Complete All';
    
    div.appendChild(deleteAll)
    div.appendChild(completeAll)

    // Add The Task To Container
    tasksContainer.appendChild(div)
}
// Create task
function createTask(){
    
    let mainSpan = document.createElement("span"),
    deleteElement = document.createElement("span"),
    text = document.createTextNode(theInput.value),
    deleteText = document.createTextNode("Delete");

    mainSpan.appendChild(text);
    mainSpan.className = 'task-box';
    deleteElement.appendChild(deleteText);
    deleteElement.className = 'delete'
    mainSpan.appendChild(deleteElement);

    // Add The Task To Container
    tasksContainer.appendChild(mainSpan)

    // Empty The Input 
    theInput.value = "";
    createButtons();
}
function createAllTask(){
    var taskList = JSON.parse(window.localStorage.getItem('taskArray'));
    for(let i =0; i< taskList.length; i++){
        let mainSpan = document.createElement("span"),
        deleteElement = document.createElement("span"),
        text = document.createTextNode(taskList[i]),
        deleteText = document.createTextNode("Delete");

        mainSpan.appendChild(text);
        mainSpan.className = 'task-box';
        deleteElement.appendChild(deleteText);
        deleteElement.className = 'delete'
        mainSpan.appendChild(deleteElement);

        // Add The Task To Container
        tasksContainer.appendChild(mainSpan)
    }

    // Empty The Input 
    theInput.value = "";
    
    if (tasksContainer.childElementCount == 0) {
        createNoTasks();
    }else{
        createButtons();
    }
    
}
// Function To Calculate Tasks
function calculateTasks() {

    // Calculate All Tasks
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    // Calculate Completed Tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}
theAddButton.onclick = function(){
    
    if(theInput.value == ""){
        swal("Please enter a task.");
    }else{
        let noTasksMsg = document.querySelector(".no-tasks-message");

        // Check If Span With No Tasks Message Is Exist
        if (document.body.contains(document.querySelector(".no-tasks-message"))) {

            // Remove No Tasks Message
            noTasksMsg.remove();

        }
        let inputValue = theInput.value
        if(!inputArray.includes(inputValue.toLowerCase()) && !inputArray.includes(inputValue.toUpperCase())){
            swal("Good job!", "Your Task Is Add", "success");
            inputArray.push(theInput.value)
            window.localStorage.setItem('taskArray',JSON.stringify(inputArray))
            // Create New Task
            createTask();
        }else{
            swal("Good job!","This task is added before","warning");
            theInput.value = "";
        }
        
        

        // Focus On Input 
        theInput.focus();
    }
}
document.addEventListener('click',function(e){
    if ( e.target.className == 'delete') {
        // Delete Button Clicked
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this task!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((value) => {
            if (value) {
                e.target.parentNode.remove()
                inputArray.pop(e.target.parentNode.innerHTML[0])
                window.localStorage.setItem('taskArray',JSON.stringify(inputArray))
                // Check Number Of Tasks Inside The Container
                console.log(tasksContainer.childElementCount)
                if (tasksContainer.childElementCount == 1) {
                    createNoTasks();
                    document.querySelector('.tasks-content div').remove()
                }
            }
        });
    }
    if(e.target.classList.contains('task-box')){
        // Toggle Class 'finished'
        e.target.classList.toggle("finished")
    }

    if ( e.target.className == 'deleteAll') {
        // Delete Button Clicked
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this task!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((value) => {
            if (value) {
                let allTasks = document.querySelectorAll(".task-box")
                for(let i=0; i<allTasks.length; i++){   
                    allTasks[i].remove()
                    e.target.parentNode.remove()
                    inputArray = []
                }
                window.localStorage.setItem('taskArray',JSON.stringify(inputArray))
                // Check Number Of Tasks Inside The Container
                if (tasksContainer.childElementCount == 0) {
                    createNoTasks();
                }
            }
        });
    }
    if(e.target.className == 'completeAll'){
        // Toggle Class 'finished'
        let allTasks = document.querySelectorAll(".task-box")
                for(let i=0; i<allTasks.length; i++){   
                    allTasks[i].classList.toggle("finished")
                }
    }
    calculateTasks();
})