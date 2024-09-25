import ToDoItem from "./TodoItem";
import Styles from "./Todolist.module.css";
export default function TodoList({ todos, setTodosBy }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={Styles.list}>
      {sortedTodos.map((item) => (
        <ToDoItem
          key={item.name}
          Items={item}
          todos={todos}
          setTodosBy={setTodosBy}
        />
      ))}
    </div>
  );
}
