import { useEffect, useState } from "react";
import Form from "./Form";

export default function Todo() {
  const [todos, setTodos] = useState(() =>{
    const storeTodos = JSON.parse(window.localStorage.getItem("todos") || "[]")
  });
  const completedTodo = todos.filter((todo) => todo.done).length;
  useEffect(() =>{
   window.localStorage.setItem("todos" , JSON.stringify(todos))
  },[todos])
  return (
    <>
      <section className="bg-white flex shadow mb-10">
        <div className="flex flex-col px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Your todos
          </dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            {todos.length}
          </dd>
        </div>

        <div className="flex flex-col px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Compeleted Todos
          </dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            {completedTodo}
          </dd>
        </div>
      </section>
      <Form todos={todos} setTodos={setTodos} />
    </>
  );
}
