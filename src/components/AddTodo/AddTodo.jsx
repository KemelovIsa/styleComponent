import React, { useRef } from "react";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import s from "./AddTodo.module.css";

const AddTodo = ({ todo, setTodo }) => {
  const valueRef = useRef(null);
  const value2Ref = useRef(null);

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: Math.random(),
        title: valueRef.current,
        img: value2Ref.current,
        status: true,
      },
    ]);
    valueRef.current = "";
    value2Ref.current = "";
  }

  return (
    <Row>
      <Col className={s.addTodoForm}>
        <FormControl
          placeholder="write text"
          value={valueRef.current}
        />
        <FormControl
          placeholder="write photo"
          value={value2Ref.current}
        />
        <Button onClick={saveTodo} className={s.btn}>
          SAVE
        </Button>
      </Col>
    </Row>
  );
};

export default AddTodo;
