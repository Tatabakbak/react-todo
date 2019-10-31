import React from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css';

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {

    const items = todos.map(({id, ...itemProps}) => {
        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps}
                              onToggleImportant={() => onToggleImportant(id)}
                              onToggleDone={() => onToggleDone(id)}
                              onDeleted={() => onDeleted(id)}/>
            </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            {items}
        </ul>
    )
};

export default TodoList;