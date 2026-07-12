Project 2 – Backend API (Users API)
This is a simple backend API built using Node.js and Express. It manages a "Users" resource (view the list, view a single user, add a new user).
How to Run

Node.js should be installed (you can download it from nodejs.org).
In the terminal, navigate into this folder:

   cd project2-api

Install dependencies:

   npm install

Start the server:

   npm start

Test it in your browser or Postman: http://localhost:3000/users

Endpoints
MethodURLDescriptionGET/usersReturns the list of all usersGET/users/:idReturns a specific userPOST/usersAdds a new user
Example body for POST /users:
json{
  "name": "Ahmed",
  "email": "ahmed@example.com"
}
If name or email is missing, the API will return a 400 error (validation).
Testing (using Postman or curl)
curl http://localhost:3000/users

curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Ahmed","email":"ahmed@example.com"}'
