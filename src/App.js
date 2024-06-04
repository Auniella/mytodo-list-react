import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Forms";
import FiltersBtn from "./components/FiltersBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const FILTER_MAP = {
  Toutes: () => true,
  Actives: (task) => !task.completed,
  Terminées: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function App(props) {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("Tâches");
    return savedTasks ? JSON.parse(savedTasks) : props.tasks;
  });

  const [filter, setFilter] = useState("Toutes");

  useEffect(() => {
    localStorage.setItem("Tâches", JSON.stringify(tasks, undefined, 4));
  }, [tasks]);

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("Tâches", JSON.stringify(updatedTasks));
  }

  function deleteTask(id) {
    console.log(id);
    const resteTasks = tasks.filter((task) => task.id !== id);
    // console.log(resteTasks);
    setTasks(resteTasks);
    localStorage.setItem("Tâches", JSON.stringify(resteTasks));
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        taskDate = {task.date}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FiltersBtn
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  function addTask(name) {
    const newTask = { name, completed: false, id: `note${nanoid()}, date: new Date()` };
    setTasks([...tasks, newTask]);
    localStorage.setItem("Tâches", JSON.stringify(tasks));
  }

  function deleteAll() {
    /* eslint-disable-next-line no-restricted-globals */
    const sup = confirm("Voulez-vous tout supprimer ?");
    if (sup === true) {
      setTasks([]);
    }
  }

  const tasksWord = taskList.length > 1 ? "tâches restantes" : "tâche restante";
  const tasksNumber = `${taskList.length} ${tasksWord} `;

  return (
    <div className="App">
      <button className="supprimer" onClick={deleteAll}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <h1>TO DO LIST</h1>

      <div className="formDiv">
        <Form addTask={addTask} />
      </div>

      <div className="filtresDiv">{filterList}</div>

      <h2>{tasksNumber}</h2>

      <ul>{taskList}</ul>
    </div>
  );
}
