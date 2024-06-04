export default function Todo(props) {
  return (
    <li className="tasksDiv">
      <input
        type="checkbox"
        id={props.id}
        defaultChecked={props.completed}
        onChange={() => props.toggleTaskCompleted(props.id)}
      />
      <label htmlFor={props.id}>{props.name} - <span classname="date">{props.taskDate.toLocaleString}/span></label>
      <button className="supprimer" onClick={() => props.deleteTask(props.id)}>
        Supprimer
      </button>
      <hr />
    </li>
  );
}
