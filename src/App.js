import React, { useState, useEffect } from "react";
import api from "./api";

const TodoList = () => {

  const [Todos, setTodos] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    !isMounted &&
      api.getTodo().then((json) => {
        setTodos(json.Items);
        setIsMounted(true);
      });
  }, [isMounted]);

  return (
  
    <><h1>Branche dave le chanteur</h1><ul>
      {Todos.map((Todo, index) => {
        return (
          <li key={index}>
            {Todo.Id} {Todo.text}
          </li>
        );
      })}
    </ul></>
  );
};

export default TodoList;