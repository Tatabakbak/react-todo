import React from "react";
import './todo-list-item.css';

const TodoListItem = ({label, onDeleted, onToggleImportant, onToggleDone, done, important}) => {
    let classNames = 'todo-list-item';
    if (done) classNames += ' done';
    if (important) classNames += ' important';

    return (
        <span className={classNames}>

            <span
                className="todo-list-item-label"
                onClick={onToggleDone}>
                {label}
            </span>

            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onToggleImportant}
                    title="mark as important">
            <i className="fa fa-exclamation"/>
            </button>

            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}
                    title="delete">
                <i className="fa fa-trash-o"/>
            </button>

        </span>
    );
};

export default TodoListItem;

