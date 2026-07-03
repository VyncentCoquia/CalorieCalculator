let tasks = [];

function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    // Store the task in the array
    tasks.push(task);

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
            ${tasks[i]}
            <button onclick="deleteTask(${i})">
                ❌
            </button>
        `;

        taskList.appendChild(li);
    }
}

function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();
}