# Project 2 – Backend API (Users API)

Ye ek simple backend API hai jo Node.js aur Express se banayi gayi hai.
Ye "Users" naam ka resource manage karti hai (list dekhna, ek user dekhna, naya user add karna).

## Kaise chalayein (Run karein)

1. Node.js install hona chahiye (nodejs.org se download kar sakte ho).
2. Terminal mein is folder ke andar jao:
   ```
   cd project2-api
   ```
3. Dependencies install karo:
   ```
   npm install
   ```
4. Server start karo:
   ```
   npm start
   ```
5. Browser ya Postman mein test karo: `http://localhost:3000/users`

## Endpoints

| Method | URL           | Kaam                          |
|--------|---------------|--------------------------------|
| GET    | /users        | Sab users ki list dega        |
| GET    | /users/:id    | Ek specific user dega          |
| POST   | /users        | Naya user add karega           |

### POST /users ka example body:
```json
{
  "name": "Ahmed",
  "email": "ahmed@example.com"
}
```
Agar `name` ya `email` missing ho, to API 400 error dega (validation).

## Testing (Postman ya curl se)

```
curl http://localhost:3000/users

curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Ahmed","email":"ahmed@example.com"}'
```

## Submission (Internship ko kahan bhejna hai)

Aam tor pe internships ye 2 tareeke mangte hain — apna task ka instructions doc dekh kar confirm kar lena:

1. **GitHub Repo** (sabse common): GitHub par account banao, naya repository banao,
   is folder ko push kar do, aur repo ka link internship ko bhej do.
2. **ZIP file**: Poora `project2-api` folder zip kar ke email/portal pe upload kar do.

Agar aap chahen to main aapko GitHub par push karne ka step-by-step tareeka bhi bata sakta hoon.
