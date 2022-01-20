import React, { useEffect, useReducer } from 'react';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { todoReducer } from './hooks/todoReducer';

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);


	const handleAddTodo = (newTodo) => {
		dispatch({
			type: 'add',
			payload: newTodo,
		});
	};

	const handleDeleteTodo = (todoID) => {
		dispatch({
			type: 'delete',
			payload: todoID,
		});
	};

	const handleDoneTodo = (todoID) => {
		dispatch({
			type: 'done',
			payload: todoID,
		});
	};

	return (
		<>
			<h1>TodoApp ({todos.length})</h1>
			<hr />
			<div className="row">
				<AddTodo handleAddTodo={handleAddTodo} />
				<TodoList
					todos={todos}
					handleDeleteTodo={handleDeleteTodo}
					handleDoneTodo={handleDoneTodo}
				/>
			</div>
		</>
	);
};
