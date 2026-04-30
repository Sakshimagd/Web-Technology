const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static("public"));

app.post("/submit", (req, res) => {
    const { name, email, branch, dob } = req.body;

    if (!name || !email || !branch || !dob) {
        return res.json("All fields are required!");
    }

    if (!email.includes("@")) {
        return res.json("Invalid Email!");
    }

    if (name.toLowerCase() === "test") {
        return res.json("Invalid Name!");
    }

    res.json("Admission Form Submitted Successfully!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});