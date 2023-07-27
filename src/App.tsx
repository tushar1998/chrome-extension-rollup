import React, { FC, useEffect, useState } from "react";

interface Todo {
  userId?: number;
  id?: number;
  title?: string;
}

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  //function to todos from placeholder.typicode.com api
  const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data);
  };

  return (
    <div>
      <button onClick={() => getTodos()}>Get Todos</button>
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>;
      })}
    </div>
  );
};

export default App;
