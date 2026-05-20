import z from "zod"

const todoSchema = z.object({
    title: z.string().max(24, {message: "Title cannot be more than 24 characters"}),
    description: z.string().max(100, {message: "Description cannot be more than 100 characters"}),
})

const editTodoSchema = z.object({
    title: z.string().max(24, {message: "Title cannot be more than 24 characters"}),
    description: z.string().max(100, {message: "Description cannot be more than 100 characters"})
})

export { todoSchema, editTodoSchema }