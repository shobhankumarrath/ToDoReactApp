import { useState } from "react";
import TodoList from "./Todolist";
import Footer from "./Footer";
import Form from "./Form";

export default function Todo() {
  const [toDos, setTodosBy] = useState([]);
  const completedTodos = toDos.filter((todo) => todo.done).length;
  const totalTodos = toDos.length;
  return (
    <div>
      <Form toDos={toDos} setTodosBy={setTodosBy} />
      <TodoList todos={toDos} setTodosBy={setTodosBy} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
