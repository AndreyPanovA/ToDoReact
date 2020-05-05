import React from "react";

import "./SearchBtns.scss";

const SearchBtns = ({ addTodos, text }) => {
  return (
    <div className="">
      <button
        onClick={() => {
          addTodos();
          text.setState({ text: "" });
        }}
      >
        <p>Добавить</p>
      </button>
      <button>
        <p>Все</p>
      </button>
      <button>
        <p>Активные</p>
      </button>
      <button>
        <p>Готовые</p>
      </button>
    </div>
  );
};

export default SearchBtns;
