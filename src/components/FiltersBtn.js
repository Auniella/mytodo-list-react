export default function FilterBtn(props) {
  return (
    <button
      className="filtrer"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span>{props.name}</span>
    </button>
  );
}
