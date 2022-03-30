import React, { useState } from "react";
import classes from "./CreateTodo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function CreateTodo(props) {
  const [enteredTodo, setEnteredTodo] = useState("");

  const inputHandler = (e) => {
    setEnteredTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredTodo.trim().length === 0) {
      return;
    }

    const todoData = {
      id: Date.now(),
      name: enteredTodo,
      complete: false,
    };

    props.onAddTodos(todoData);

    setEnteredTodo("");
  };

  return (
    <>
      <h2>What's the plan for today?</h2>
      <div className={classes["create-todo"]}>
        <form onSubmit={submitHandler}>
          <input
            value={enteredTodo}
            type="text"
            placeholder="add todo"
            onChange={inputHandler}
          />
          <button>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </form>
        <select
          name="todos"
          className={classes.filter}
          onChange={props.filterHandler}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </>
  );
}

export default CreateTodo;
