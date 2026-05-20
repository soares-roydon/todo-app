import express from "express"
import { router as userRouter } from "./routes/user.js"
import { router as todoRouter } from "./routes/todo.js"

const app = express()
const PORT = 3000

app.use(express.json())

// user (sign in, sign up)
// todo (create-todo, edit-todo, mark-as-done, delete-todo)

app.use("/api/v1/user", userRouter)
app.use("/api/v1/todo", todoRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})