import React, { useState, useEffect } from "react";
import { MainLayout } from "../../layouts";
import { AddTodo, Todos } from "../../components";
function Home() {
	let initTodo;
	if (localStorage.getItem("todos") === null) {
	} else {
		initTodo = JSON.parse(localStorage.getItem("todos"));
	}

	const onDelete = (todo) => {
		console.log("This is onDelete", todo);
		setTodos(
			todos.filter((e) => {
				return e !== todo;
			}),
		);
		localStorage.setItem("todos", JSON.stringify(todos));
	};
	const addTodo = (title, desc) => {
		console.log("I am adding this todo", title, desc);
		let sno;
		if (todos.length == 0) {
			sno = 1;
		} else {
			sno = todos[todos.length - 1].sno + 1;
		}
		const mytodo = {
			sno: sno,
			title: title,
			desc: desc,
		};
		setTodos([...todos, mytodo]);
		console.log(mytodo);
	};
	const [todos, setTodos] = useState(initTodo);
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);
	return (
		<MainLayout>
			<AddTodo addTodo={addTodo} />
			<Todos todos={todos} onDelete={onDelete} />
		</MainLayout>
	);
}

export { Home };
