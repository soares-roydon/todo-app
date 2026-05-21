import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

function AddTodo({setShowForm}: {setShowForm: (value: boolean) => void}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleAddTodo() {
    fetch("http://localhost:3000/api/v1/todo/create-todo", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    setShowForm(false)
  }

  return (
    <>
      <div className="border rounded-2xl border-zinc-200 shadow-md px-6 py-5 text-zinc-900 hover:border-orange-200">
        <div className="flex flex-col gap-1 mb-3">
          <Label>Title</Label>
          <Input
            type={"text"}
            placeholder={"Go to gym"}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <Label>Description</Label>
          <Input
            type={"text"}
            placeholder={"Go to gym from 6am - 7pm"}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="mt-4">
          <Button onClick={handleAddTodo}>Add</Button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
