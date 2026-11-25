
let taskForm = document.getElementById("taskForm");
let taskList = document.getElementById("taskList");
let taskFilter = document.getElementById("taskFilter");
let message = document.getElementById("message");

let tasks = JSON.parse(localStorage.getItem("focusTasks")) || [];

function saveTasks() {
    localStorage.setItem("focusTasks", JSON.stringify(tasks));
}

function updateStats() {
    document.getElementById("totalTasks").textContent = tasks.length;

    let pending = tasks.filter(task => !task.completed);
    let completed = tasks.filter(task => task.completed);

    document.getElementById("pendingTasks").textContent = pending.length;
    document.getElementById("completedTasks").textContent = completed.length;
}

function showTasks() {
    taskList.innerHTML = "";

    let filter = taskFilter.value;

    let filteredTasks = tasks.filter(task => {
        if (filter === "pending") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });

    if (filteredTasks.length === 0) {
        taskList.textContent = "No tasks to show.";
        return;
    }

    filteredTasks.forEach(task => {
        let card = document.createElement("div");
        let heading = document.createElement("h3");
        let subject = document.createElement("p");
        let date = document.createElement("p");
        let buttons = document.createElement("div");
        let completeBtn = document.createElement("button");
        let deleteBtn = document.createElement("button");

        card.className = "task";
        if (task.completed) card.classList.add("completed");

        heading.textContent = task.name;
        subject.textContent = "Subject: " + task.subject;
        date.textContent = "Due: " + task.date;

        buttons.className = "task-buttons";

        completeBtn.textContent = task.completed ? "Completed" : "Mark Complete";
        completeBtn.disabled = task.completed;
        completeBtn.setAttribute("data-id", task.id);

        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.setAttribute("data-id", task.id);

        buttons.append(completeBtn, deleteBtn);
        card.append(heading, subject, date, buttons);
        taskList.appendChild(card);
    });
}

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("taskName").value.trim();
    let subject = document.getElementById("taskSubject").value;
    let date = document.getElementById("taskDate").value;

    if (!name || !subject || !date) {
        message.textContent = "Please enter all task details.";
        return;
    }

    tasks.push({
        id: Date.now(),
        name: name,
        subject: subject,
        date: date,
        completed: false
    });

    saveTasks();
    updateStats();
    showTasks();

    taskForm.reset();
    message.textContent = "Task added successfully.";
});

taskFilter.addEventListener("change", showTasks);

taskList.addEventListener("click", function(event) {
    let id = Number(event.target.getAttribute("data-id"));

    if (event.target.textContent === "Delete") {
        tasks = tasks.filter(task => task.id !== id);
    } else if (event.target.textContent === "Mark Complete") {
        let task = tasks.find(task => task.id === id);

        if (task) task.completed = true;
    } else {
        return;
    }

    saveTasks();
    updateStats();
    showTasks();
});

document.getElementById("clearBtn").addEventListener("click", function() {
    if (confirm("Do you want to delete all tasks?")) {
        tasks = [];
        saveTasks();
        updateStats();
        showTasks();
        message.textContent = "All tasks cleared.";
    }
});

updateStats();
showTasks();
