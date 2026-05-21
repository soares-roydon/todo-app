import TodoCard from "./TodoCard";

function Main() {
  return (
    <>
      <div className="px-6 py-6 text-zinc-900">
        <div className="border border-zinc-400 shadow rounded-xl py-2 bg-orange-50">
          <div className="flex justify-center py-1">Create a new todo</div>
          <div className="flex justify-center py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-9 border rounded p-1 border-zinc-500 hover:bg-green-100 shadow"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>

        <div className="mt-6 mb-2 text-xl underline text-zinc-800">My todos</div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        </div>
      </div>
    </>
  );
}

export default Main;
