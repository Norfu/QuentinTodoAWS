import React, { useState, useEffect } from "react";
import apiGet from "./api";
import apiPost from './apiPost';

const TodoList = () => {

  const [Todos, setTodos] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const TodoForm = props => {
    const [todoForm, setTodoForm] = useState(props.todoForm)

  useEffect(() => {
    !isMounted &&
      apiGet.getTodo().then((json) => {
        setTodos(json.Items);
        setIsMounted(true);
      });
  }, [isMounted]);

  }
  return (
  
    <><h1>Branche Prod</h1><ul>
  
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
