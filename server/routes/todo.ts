import express from "express";
import { editTodoSchema, todoSchema } from "../validators/todoSchema.js";
import { prisma } from "../lib/prisma.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// todo (create-todo, edit-todo, get-todos, mark-as-done, delete-todo)

// 1. Create a new todo
router.post("/create-todo", authMiddleware, async (req, res) => {
  const parsedTodoSchema = todoSchema.safeParse(req.body);

  if (!parsedTodoSchema.success) {
    return res
      .status(400)
      .json({ message: parsedTodoSchema.error.issues[0]?.message });
  }

  const { title, description } = parsedTodoSchema.data;

  try {
    const newTodo = await prisma.todo.create({
      data: {
        title,
        description,
        user: {
          connect: {
            id: req.userId!,
          },
        },
      },
      select: {
        id: true,
        title: true,
        description: true,
        isCompleted: true,
      },
    });

    return res.status(201).json({ newTodo });
  } catch (e) {
    return res.status(500).json({ message: "Some internal error occurred" });
  }
});

// 2. Get all the todos
router.get("/get-todos", authMiddleware, async (req, res) => {
  const todos = await prisma.todo.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      isCompleted: true,
    },
    where: {
      userId: req.userId!,
    },
  });

  return res.status(200).json({ todos });
});

// 3. Edit am existing todo
router.put("/edit-todo/:id", async (req, res) => {
  const id = Number(req.params.id);
  const parsedTodoSchema = editTodoSchema.safeParse(req.body);

  if (!parsedTodoSchema.success) {
    return res
      .status(400)
      .json({ message: parsedTodoSchema.error.issues[0]?.message });
  }

  const { title, description } = parsedTodoSchema.data;

  try {
    const updatedTodo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
      select: {
        id: true,
        title: true,
        description: true,
        isCompleted: true,
      },
    });

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(201).json({ updatedTodo });
  } catch (e: any) {
    if (e.code === "P2025") {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    return res.status(500).json({ message: "Some internal error occurred" });
  }
});

// Mark as completed route
router.put("/mark-as-done/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.todo.update({
      where: {
        id,
      },
      data: {
        isCompleted: true,
      },
    });

    return res.status(200).json({ message: "Todo marked as completed" });
  } catch (e: any) {
    if (e.code === "P2025") {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    return res.status(500).json({ message: "Some internal error occurred" });
  }
});

// Delete todo route
router.delete("/delete/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.todo.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({message: "Todo deleted"})

  } catch (e: any) {
    if (e.code === "P2025") {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    return res.status(500).json({ message: "Some internal error occurred" });
  }
});

export { router };
