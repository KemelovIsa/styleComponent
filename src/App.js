import "./App.css";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Main from "./components/Mains/Main";

function App() {
	const [todo, setTodo] = useState([]);

	return (
		<Container>
			<Header />
			<AddTodo todo={todo} setTodo={setTodo} />
			<TodoList todo={todo} setTodo={setTodo} />
			<Main />
		</Container>
	);
}

export default App;