const express = require('express')
const app = express()
const port = 3000


// function checkRought(req, res, next){
//    console.log("requst url");  
//    next(); 
// }
// app.use(checkRought);

app.use((req, res, next) => {
   console.log("data receive,new date");
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About page')
})

app.get('/home', (req, res) => {
  res.send('welcome to home page!')
})

app.get('/login', (req, res) => {
  res.send('welcome to login page')
})

app.get('/regi', (req, res) => {
  res.send('welcome to registration page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// const express = require('express')
// const app = express()
// const port = 3000

// // Welcome Route
// app.get('/', (req, res) => {
//   res.send('Welcome to College Portal ')
// })

// // CSE Route
// app.get('/cse', (req, res) => {
//   const data = {
//     branch: "Computer Science Engineering",
//     description: "Focuses on programming, software development, AI, and data structures.",
//     students: ["Sakshi", "Rahul", "Amit", "Priya"]
//   }

//   res.json(data)
// })

// // Mechanical Route
// app.get('/mechanical', (req, res) => {
//   const data = {
//     branch: "Mechanical Engineering",
//     description: "Deals with machines, thermodynamics, and manufacturing systems.",
//     students: ["Rohit", "Anjali", "Vikas", "Sneha"]
//   }

//   res.json(data)
// })

// // Electrical Route
// app.get('/electrical', (req, res) => {
//   const data = {
//     branch: "Electrical Engineering",
//     description: "Focuses on circuits, power systems, and electrical machines.",
//     students: ["Karan", "Neha", "Arjun", "Pooja"]
//   }

//   res.json(data)
// })

// // Dynamic route (bonus)
// app.get('/student/:name', (req, res) => {
//   const name = req.params.name
//   res.send(`Hello ${name}, welcome to the student portal!`)
// })

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`)
// })
