export default function Todo(props) {
    const todo = props.todo;
    return (
      <>
        <li className="tasks">
          <span>
            {" "}
            <input type="checkbox" />
            {todo.title}
          </span>
  
          <div>
            <button>edit</button>
            <button>delete</button>
          </div>
        </li>
      </>
    );
  }