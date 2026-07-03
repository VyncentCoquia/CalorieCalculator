let tasks = [];

function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    // Store the task in the array
    tasks.push({
        name: task,
        completed: false
    });

    // Refresh the displayed list
    displayTasks();

    // Clear the textbox
    input.value = "";
}

function displayTasks() {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    

    for (let i = 0; i < tasks.length; i++) {

        let li = document.createElement("li");

         li.innerHTML = `
            <span class="${tasks[i].completed ? "completed" : ""}">
                ${tasks[i].name}
            </span>

            <div>

                <button onclick="toggleTask(${i})">

                    ${tasks[i].completed ? "Undo" : "Done"}

                </button>

                <button onclick="deleteTask(${i})">

                    ❌

                </button>

            </div>
        `;

        taskList.appendChild(li);
    }


}

function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();
}

function toggleTask(index){

    tasks[index].completed = !tasks[index].completed;

    displayTasks();

}