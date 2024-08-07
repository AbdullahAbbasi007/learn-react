import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	const submit = (e) => {
		e.preventDefault();
		if (!title || !desc) {
			alert("Title or Description can't be blank");
			return;
		}
		addTodo(title, desc);
		setTitle("");
		setDesc("");
	};

	return (
		<div className="container my-5">
			<h3>Add a todo</h3>
			<form onSubmit={submit}>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Todo Title
					</label>
					<input
						type="text"
						className="form-control"
						id="title"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="desc" className="form-label">
						Todo Description
					</label>
					<input
						type="text"
						className="form-control"
						id="desc"
						onChange={(e) => setDesc(e.target.value)}
						value={desc}
					/>
				</div>
				<button type="submit" className="btn btn-success btn-sm">
					Add Todo
				</button>
			</form>
		</div>
	);
};
