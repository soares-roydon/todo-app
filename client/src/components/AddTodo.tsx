import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

function AddTodo() {
  return (
    <>
      <div className="border rounded-2xl border-zinc-200 shadow-md px-6 py-5 text-zinc-900 hover:border-orange-200">
        <div className="flex flex-col gap-1 mb-3">
          <Label>Title</Label>
          <Input type={"text"} placeholder={"Go to gym"} />
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <Label>Description</Label>
          <Input type={"text"} placeholder={"Go to gym from 6am - 7pm"} />
        </div>
        <div className="mt-4">
          <Button>Add</Button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
