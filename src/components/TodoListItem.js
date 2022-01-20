import React from 'react';

export const TodoListItem = ({ todo, index, handleDeleteTodo, handleDoneTodo} ) => {
	return (
		<li className="list-group-item" key={todo.id}>
			<span
				onClick={() => handleDoneTodo(todo.id)}
				className={todo.done ? 'done-todo' : ''}
			>
				{index + 1}. {todo.desc}
			</span>
			<button
				className="btn btn-outline-danger"
				onClick={() => handleDeleteTodo(todo.id)}
			>
				Delete
			</button>
		</li>
	);
};
