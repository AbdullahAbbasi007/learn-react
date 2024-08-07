import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
	const mystyle = {
		minHeight: "21.5vh",
	};

	return (
		<div className="container" style={mystyle}>
			<h3>Todos List</h3>
			{props.todos.length === 0 ? (
				<p>No todos to display</p>
			) : (
				props.todos.map((todo, index) => (
					<React.Fragment key={todo.sno}>
						<TodoItem todo={todo} onDelete={props.onDelete} />
						{index < props.todos.length - 1 && <hr />}
					</React.Fragment>
				))
			)}
		</div>
	);
};
