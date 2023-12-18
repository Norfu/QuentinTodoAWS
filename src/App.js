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

  const submit = e => {
    e.preventDefault()
    fetch('https://gsym8ugyub.execute-api.eu-central-1.amazonaws.com/dev/todo_list', {
      method: 'POST',
      body: JSON.stringify({ todoForm }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(json => setTodoForm(json.todoForm))
  }  
  }
  return (
  
    <><h1>Branche Prod</h1><ul>
      <form onSubmit={submit}>
        <input type="text"
        name="text"
        value={todoForm.text}
        onChange={e => setTodoForm({...todoForm, text:e.target.value})}/>
        <input type="submit" name="ajouter"/>
      </form>
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