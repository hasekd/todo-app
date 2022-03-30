import React from "react";
import classes from "./DisplayTodos.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function DisplayTodos(props) {
  const deleteTodo = (currId) => {
    props.setTodos(props.todos.filter((todo) => todo.id !== currId));
  };

  const toggleTodo = (currId) => {
    props.setTodos(
      props.todos.map((todo) => {
        if (todo.id === currId) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
      {props.filteredTodos.map((todo) => (
        <div key={todo.id} className={classes.card}>
          <p className={`${todo.complete ? classes.completed : ""}`}>
            {todo.name}
          </p>
          <div className={classes.butt}>
            <button
              onClick={() => toggleTodo(todo.id)}
              className={classes.toggle}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button
              className={classes.delete}
              onClick={() => deleteTodo(todo.id)}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default DisplayTodos;
