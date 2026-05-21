import TodoCard from "./TodoCard"

export interface Todo {
    id: string,
    title: string,
    description: string,
    isCompleted: boolean
}

function Todos({todos}: {todos: Todo[]}) {

    return <>
        {todos.map((todo) => {
            return <div key={todo.id}>
                <TodoCard id={todo.id} title={todo.title} description={todo.description} isCompleted={todo.isCompleted}/>
                </div>
        })}
    </>
}

export default Todos