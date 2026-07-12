// Project 2 - Backend API Development
// Simple "Users" REST API demonstrating:
//  - GET / POST endpoints
//  - Handling user input & responses
//  - Basic data validation
//  - Correct HTTP status codes (RESTful design)

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // lets us read JSON sent in POST requests

// ---- In-memory "database" (just an array for this project) ----
let users = [
  { id: 1, name: "Ali Raza", email: "ali@example.com" },
  { id: 2, name: "Sara Khan", email: "sara@example.com" },
];
let nextId = 3;

// ---- Helper: find a user by id ----
function findUser(id) {
  return users.find((u) => u.id === Number(id));
}

// ================= ROUTES =================

// GET /users -> return all users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// GET /users/:id -> return one user
app.get("/users/:id", (req, res) => {
  const user = findUser(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.status(200).json(user);
});

// POST /users -> create a new user
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  // ---- Basic validation ----
  if (!name || !email) {
    return res
      .status(400)
      .json({ error: "Both 'name' and 'email' are required" });
  }
  if (!email.includes("@")) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  const newUser = { id: nextId++, name, email };
  users.push(newUser);

  res.status(201).json(newUser); // 201 = Created
});

// Catch-all for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
