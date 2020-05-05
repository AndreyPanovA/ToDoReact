import React from "react";

import "./TodoHeader.scss";

const TodoHeader = ({ title }) => {
  return (
    <header>
      <div className="logo"></div>
      <p>{title}</p>
      <div className="git"></div>
    </header>
  );
};

export default TodoHeader;
