import React, { Component } from "react";
import "./TodoListItem.scss";

export default class TodoListItem extends Component {
  // state = {
  //   done: false,
  //   important: false,
  // };
  onLabelClick = () => {
    this.props.onToggleDone();
    this.setState((state) => {
      return {
        done: !state.done,
      };
    });
  };
  onMarkImportant = () => {
    this.props.onToggleImportant();
    this.setState(({ important }) => {
      return { important: !important };
    });
  };
  render() {
    const {
      label,
      onDeleted,
      onToggleDone,
      onToggleImportant,
      done,
      important = false,
    } = this.props;
    // const { done, important = false } = this.state;
    // const style = {
    //   color: important ? "#0065eb" : "black",
    //   fontWeight: important ? 600 : 300,
    // }; style={style}
    let classNames = "";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }

    return (
      <span className={"itemContainer "}>
        <span onClick={onToggleDone} className={classNames}>
          {label}
        </span>
        <span className="itemBtns">
          <h1 onClick={onDeleted}>-</h1>
          <h1 onClick={onToggleImportant}>!</h1>
        </span>
      </span>
    );
  }
}
