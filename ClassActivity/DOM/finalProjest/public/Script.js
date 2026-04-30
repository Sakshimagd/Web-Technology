const form = document.getElementById("admissionForm");
const message = document.getElementById("message");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let branch = document.getElementById("branch").value;
    let dob = document.getElementById("dob").value;

    // VALIDATION
    if (name === "" || email === "" || branch === "" || dob === "") {
        showMessage("All fields are required!", "red");
        return;
    }

    if (!email.includes("@")) {
        showMessage("Invalid Email!", "red");
        return;
    }

    try {
        // SEND DATA TO EXPRESS BACKEND
        let response = await fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, branch, dob })
        });

        let result = await response.json();

        showMessage(result, "lightgreen");

    } catch (error) {
        showMessage("Server Error", "red");
    }
});

// SHOW MESSAGE
function showMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}

// LOAD COURSES 
async function loadCourses() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/4");
        let data = await response.json();

        const courses = ["CSE", "Mechanical", "Electrical", "Civil"];

        const list = document.getElementById("courseList");
        list.innerHTML = "";

        courses.forEach((course) => {
            let li = document.createElement("li");
            li.textContent = course;
            list.appendChild(li);
        });

    } catch (error) {
        showMessage("Error loading courses", "red");
    }
}