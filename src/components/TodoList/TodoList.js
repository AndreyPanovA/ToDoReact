import React from "react";
import "./TodoList.scss";
import TodoListItem from "./TodoListItem/TodoListItem";

const TodoList = ({
  todos,
  leftCase,
  succedCase,
  onDeleted,
  onToggleImportant,
  onToggleDone,
}) => {
  const items = todos.map((el, index) => {
    const { id } = el;
    return (
      <li key={id}>
        <TodoListItem
          {...el}
          onDeleted={() => {
            onDeleted(id);
          }}
          onToggleImportant={() => {
            onToggleImportant(id);
          }}
          onToggleDone={() => {
            onToggleDone(id);
          }}
        />
      </li>
    );
  });
  return (
    <div className="listBox">
      <div className="todoHeader">
        <h2>Todo List</h2>{" "}
        <small>
          {leftCase} осталось, {succedCase} сделано
        </small>
      </div>
      <ul>{items}</ul>
    </div>
  );
};

export default TodoList;
