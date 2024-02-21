import React from "react";

const Todo = ({ todos }) => {
  return (
    <main>
      <h1>할 일</h1>
      {todos.map((todo) => {
        return (
          <section>
            <h2>{todo.title}</h2>
            <p>{todo.date}</p>
            <p>{todo.content}</p>
          </section>
        );
      })}
    </main>
  );
};

export default Todo;
