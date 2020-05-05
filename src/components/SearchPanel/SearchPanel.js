import React, { Component } from "react";

import "./SearchPanel.scss";
import SearchBtns from "./SearchBtns/SearchBtns";
class SearchPanel extends Component {
  state = {
    text: "",
  };
  render() {
    const { addTodos, textFilter } = this.props;
    return (
      <div className="Box">
        <input
          placeholder="Нажмите для ввода..."
          className="search"
          onChange={(event) => {
            this.setState({ text: event.target.value });
            // this.props.onSearchChange(event.target.value);
            textFilter(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.keyCode === 13) {
              addTodos(this.state.text, 1);
              this.setState({ text: "" });
            }
          }}
          value={this.state.text}
        />
        <SearchBtns
          addTodos={() => {
            addTodos(this.state.text, 1);
          }}
          text={this}
        />
      </div>
    );
  }
}

export default SearchPanel;
