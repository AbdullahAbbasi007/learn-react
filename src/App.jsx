import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Fotter } from "./MyComponents/Fotter";
import React, { useState } from "react";
function App() {
	const onDelete = (todo) => {
		console.log("This is onDelete", todo);
		setTodos(
			todos.filter((e) => {
				return e !== todo;
			}),
		);
	};
	const [todos, setTodos] = useState([
		{
			sno: 1,
			title: "Go to the market",
			desc: "You need to go to the market to get this job done1",
		},
		{
			sno: 2,
			title: "Go to the mall",
			desc: "You need to go to the mall to get this job done2",
		},
		{
			sno: 3,
			title: "Go to the bank",
			desc: "You need to go to the bank to get this job done3",
		},
	]);

	return (
		<>
			<Header title={"My Todos List"} searchBar={false} />
			<Todos todos={todos} onDelete={onDelete} />
			<Fotter />
		</>
	);
}

export default App;
