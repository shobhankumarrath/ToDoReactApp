import Styles from "./Todoitem.module.css";
export default function Items({ Items, todos, setTodosBy }) {
  function handleDelete(Item) {
    setTodosBy(todos.filter((todo) => todo !== Item));
  }
  function handleClick(name) {
    const arrayNew = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodosBy(arrayNew);
  }

  const completed = Items.done ? Styles.completed : "";
  return (
    <div className={Styles.itemName}>
      <div className={Styles.Item}>
        <span className={completed} onClick={() => handleClick(Items.name)}>
          {Items.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(Items)}
            className={Styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={Styles.line} />
    </div>
  );
}
