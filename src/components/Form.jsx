import { useState } from "react";
import { TodoLists } from "./TodoLists";

function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  const sortTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex  gap-4 px-2 py-2 shadow">
          <input
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            type="text"
            placeholder="add item"
            value={todo.name}
            required
            className="w-full p-4 focus:outline-none"
          />
          <button className="bg-blue-400 text-white py-2 px-4 rounded">
            add
          </button>
        </div>
      </form>

      {sortTodos.map((todo) => (
        <TodoLists
          todo={todo}
          key={todo.name}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </>
  );
}

export default Form;
