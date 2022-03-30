import { useState, useEffect } from "react";
import CreateTodo from "./components/CreateTodo";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  const [todos, setTodos] = useState([]);
  const [enteredFilter, setEnteredFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = (e) => {
    setEnteredFilter(e.target.value);
  };

  useEffect(() => {
    switch (enteredFilter) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.complete === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.complete === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  }, [todos, enteredFilter]);

  const addTodos = (todoData) => {
    setTodos((prevTodos) => {
      return [...prevTodos, todoData];
    });
  };

  return (
    <>
      <CreateTodo filterHandler={filterHandler} onAddTodos={addTodos} />
      <DisplayTodos
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
}

export default App;
