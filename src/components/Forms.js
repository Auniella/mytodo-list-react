import React, { useState, useRef } from "react";

export default function Form(props) {
  const [name, setName] = useState("");

  const divRef = useRef(null);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "") {
      const divElement = divRef.current;
      divElement.innerHTML = `<p style="color: #f00; font-size: 1.5rem;margin-bottom: 0"">Tâche vide non enregistrée</p>`;
      setTimeout(() => {
        divElement.innerHTML = "";
      }, 1500);
      return;
    }
    props.addTask(name);
    // console.log(name);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Écrire ici"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn">
        Ajouter
      </button>
      <div ref={divRef}></div>
    </form>
  );
}
