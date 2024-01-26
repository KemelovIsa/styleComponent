import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components"; 

const StyledListItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 24px;
  padding: 6px;
  &:hover {
    background: #ff9797;
    border-radius: 6px;
  }
`;

const StyledButton = styled(Button)`
  margin-left: 12px;
`;

const TodoList = ({ todo, setTodo }) => {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  }

  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  }

  return (
    <div>
      {todo.map((item) => (
        <StyledListItems key={item.id}>
          {edit === item.id ? (
            <div>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <div>{item.title}</div>
          )}
          {edit === item.id ? (
            <div>
              <StyledButton onClick={() => saveTodo(item.id)}>save</StyledButton>
            </div>
          ) : (
            <div>
              <img src={item.img} alt={item.title} />
              <StyledButton onClick={() => deleteTodo(item.id)}>delete</StyledButton>
              <StyledButton onClick={() => editTodo(item.id, item.title)}>
                edit
              </StyledButton>
            </div>
          )}
        </StyledListItems>
      ))}
    </div>
  );
};

export default TodoList;
