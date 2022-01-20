import React from 'react';
import { useForm } from '../hooks/useForm';

export const AddTodo = ({ handleAddTodo }) => {
	const [{ todoInput }, handleInputChange, handleReset] = useForm({
		todoInput: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (todoInput.length < 1) {
			return;
		}
		handleAddTodo({
			id: new Date().getTime(),
			desc: todoInput,
			done: false,
		});
		handleReset();
	};

	return (
		<form className="col" onSubmit={handleSubmit}>
			<input
				className="form-control"
				type="text"
				placeholder="Add new todo"
				autoComplete="off"
				name="todoInput"
				value={todoInput}
				onChange={handleInputChange}
			/>
			<button className="btn btn-outline-success mt-2">Add</button>
		</form>
	);
};
