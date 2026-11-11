
document.addEventListener("DOMContentLoaded", () => {
    /* Signup */
    let signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", (event) => {
            event.preventDefault();
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim().toLowerCase();
            let password = document.getElementById("password").value;
            let users = JSON.parse(localStorage.getItem("users")) || [];
            let message = document.getElementById("message");
            let user = users.find((item) => {
                return item.email === email;
            });
            if (name.length < 3) {
                message.textContent = "Name must contain at least 3 characters.";
            } else if (user) {
                message.textContent = "Email already registered.";
            } else {
                let newUser = {
                    name: name,
                    email: email,
                    password: password
                };
                users.push(newUser);
                localStorage.setItem("users", JSON.stringify(users));
                message.textContent = "Account created successfully.";
                document.getElementById("loginLink").click();
            }
        });
    }

    /* Login */
    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            let email = document.getElementById("loginEmail").value.trim().toLowerCase();
            let password = document.getElementById("loginPassword").value;
            let users = JSON.parse(localStorage.getItem("users")) || [];
            let message = document.getElementById("message");
            let user = users.find((item) => {
                return item.email === email && item.password === password;
            });
            if (user) {
                localStorage.setItem("currentUser", JSON.stringify(user));
                message.textContent = "Login successful.";
                document.getElementById("dashboardLink").click();
            } else {
                message.textContent = "Invalid email or password.";
            }
        });
    }

    /* Dashboard */
    let username = document.getElementById("username");
    let totalStudents = document.getElementById("totalStudents");
    if (username && totalStudents) {
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        let dashboardContent = document.getElementById("dashboardContent");
        let dashboardMessage = document.getElementById("dashboardMessage");
        if (!currentUser) {
            dashboardContent.hidden = true;
            dashboardMessage.textContent = "Please login to view the dashboard.";
            document.getElementById("dashboardLoginLink").hidden = false;
        } else {
            let students = JSON.parse(localStorage.getItem("students")) || [];
            username.textContent = currentUser.name.split(" ")[0];
            totalStudents.textContent = students.length;
            let names = students.map((student) => {
                return student.name;
            });
            document.getElementById("studentNames").textContent = names.join(", ");
            let recentStudents = students.slice(-3);
            let recentNames = recentStudents.map((student) => {
                return student.name;
            });
            document.getElementById("recentStudents").textContent = recentNames.join(", ");
            let complete = students.every((student) => {
                return student.name && student.email && student.course;
            });
            document.getElementById("recordsStatus").textContent =
                students.length > 0 && complete ?
                "All student records are complete." :
                "No records or some records are incomplete.";
        }
    }

    /* Logout */
    let logout = document.getElementById("logout");
    if (logout) {
        logout.addEventListener("click", () => {
            localStorage.setItem("currentUser", JSON.stringify(null));
        });
    }

    /* Student Management */
    let studentForm = document.getElementById("studentForm");
    let studentList = document.getElementById("studentList");
    let search = document.getElementById("search");
    if (studentForm && studentList && search) {
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        let accessMessage = document.getElementById("accessMessage");
        if (!currentUser) {
            studentForm.hidden = true;
            search.hidden = true;
            accessMessage.textContent = "Please login before managing students.";
        } else {
            let students = JSON.parse(localStorage.getItem("students")) || [];
            let saveStudents = () => {
                localStorage.setItem("students", JSON.stringify(students));
            };
            let displayStudents = (data) => {
                while (studentList.firstChild) {
                    studentList.removeChild(studentList.firstChild);
                }
                data.forEach((student) => {
                    let card = document.createElement("div");
                    let name = document.createElement("p");
                    let email = document.createElement("p");
                    let course = document.createElement("p");
                    let editInput = document.createElement("input");
                    let edit = document.createElement("button");
                    let del = document.createElement("button");
                    name.textContent = "Name: " + student.name;
                    email.textContent = "Email: " + student.email;
                    course.textContent = "Course: " + student.course;
                    editInput.type = "text";
                    editInput.value = student.name;
                    editInput.placeholder = "Enter updated name";
                    edit.textContent = "Save Name";
                    del.textContent = "Delete";
                    card.appendChild(name);
                    card.appendChild(email);
                    card.appendChild(course);
                    card.appendChild(editInput);
                    card.appendChild(edit);
                    card.appendChild(del);
                    studentList.appendChild(card);
                    edit.addEventListener("click", (event) => {
                        event.stopPropagation();
                        let newName = editInput.value.trim();
                        if (newName.length >= 3) {
                            student.name = newName;
                            saveStudents();
                            displayStudents(getFilteredStudents(search.value));
                            accessMessage.textContent = "Student updated successfully.";
                        } else {
                            accessMessage.textContent = "Name must contain at least 3 characters.";
                        }
                    });
                    del.addEventListener("click", (event) => {
                        event.stopPropagation();
                        students = students.filter((item) => {
                            return item.email !== student.email;
                        });
                        saveStudents();
                        displayStudents(getFilteredStudents(search.value));
                        accessMessage.textContent = "Student deleted successfully.";
                    });
                });
            };
            let getFilteredStudents = (value) => {
                let searchValue = value.toLowerCase();
                return students.filter((student) => {
                    return student.name.toLowerCase().includes(searchValue) ||
                           student.email.toLowerCase().includes(searchValue) ||
                           student.course.toLowerCase().includes(searchValue);
                });
            };
            studentForm.addEventListener("submit", (event) => {
                event.preventDefault();
                let name = document.getElementById("studentName").value.trim();
                let email = document.getElementById("studentEmail").value.trim().toLowerCase();
                let course = document.getElementById("studentCourse").value.trim();
                let emailExists = students.some((student) => {
                    return student.email === email;
                });
                if (name.length < 3) {
                    accessMessage.textContent = "Name must contain at least 3 characters.";
                } else if (emailExists) {
                    accessMessage.textContent = "Student email already exists.";
                } else {
                    students.push({
                        name: name,
                        email: email,
                        course: course
                    });
                    saveStudents();
                    document.getElementById("studentName").value = "";
                    document.getElementById("studentEmail").value = "";
                    document.getElementById("studentCourse").value = "";
                    accessMessage.textContent = "Student added successfully.";
                    displayStudents(students);
                }
            });
            search.addEventListener("input", (event) => {
                displayStudents(getFilteredStudents(event.target.value));
            });
            displayStudents(students);
        }
    }
});
