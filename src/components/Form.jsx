import { useState } from "react";
import Styles from "./Form.module.css";
export default function Form({ toDos, setTodosBy }) {
  //const [toDo, setTodoBy] = useState("");
  const [toDo, setTodoBy] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodosBy([...toDos, toDo]);
    setTodoBy({ name: "", done: false });
  }
  return (
    <center>
      <form className={Styles.todoform} onSubmit={handleSubmit}>
        <div className={Styles.inputContainer}>
          <input
            type="text"
            onChange={(e) => setTodoBy({ name: e.target.value, done: false })}
            value={toDo.name}
            className={Styles.modernInput}
            placeholder="Enter Todo Item"
          />
          <button className={Styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </center>
  );
}
