import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const TodoLists = ({ todo, todos, setTodos }) => {
  function handleDelete(todo) {
    console.log("clikt", todo);
    setTodos(todos.filter((item) => item !== todo));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
    console.log("clict", todos);
  }

  const name = "line-through italic text-gray-400";
  const nam = "";
  return (
    <div className=" mt-4 px-2 py-4 rounded shadow">
      <h2 className="flex justify-between px-3 cursor-pointer">
        <span
          className={todo.done ? name : nam}
          onClick={() => handleClick(todo.name)}
        >
          {todo.name}
        </span>{" "}
        <span onClick={() => handleDelete(todo)}>
          {" "}
          <FontAwesomeIcon icon={faTrash} className="text-red-400" />{" "}
        </span>
      </h2>
    </div>
  );
};
