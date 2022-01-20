import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleDeleteTodo, handleDoneTodo }) => {
	return (
		<ul className="col-6 list-group">
			{todos.map((todo, index) => (
				<TodoListItem
					key={index}
					index={index}
					todo={todo}
					handleDeleteTodo={handleDeleteTodo}
					handleDoneTodo={handleDoneTodo}
				/>
			))}
		</ul>
	);
};
