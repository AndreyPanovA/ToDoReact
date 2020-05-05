import React, { Component } from "react";
import "./App.scss";

// Компоненты
import TodoHeader from "./components/TodoHeader/TodoHeader";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
  maxId = 100;
  state = {
    logoName: ["logo", "Changed"],
    i: 0,
    todoData: [
      this.createTodoItem("Выучить React JS"),
      this.createTodoItem("Написать ToDo Приложение"),
    ],
    term: "",
  };
  createTodoItem(label) {
    console.log(this);
    return {
      label: label,
      important: false,
      id: this.maxId++,
      done: false,
    };
  }
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const newArr = [...this.state.todoData];
      const idx = todoData.findIndex((el) => el.id === id);
      newArr.splice(idx, 1);
      // alert("delited id:" + id + "test" + idx);
      return {
        todoData: newArr,
      };
    });
  };
  addItem = (text) => {
    if (text.trim().length < 1) {
      alert("ведите что нибудь");
    } else {
      this.setState(({ todoData }) => {
        let newItem = {
          label: text,
          important: false,
          id: this.maxId++,
          done: false,
        };
        console.log(text);
        const newArr = [newItem, ...this.state.todoData];
        return {
          todoData: newArr,
        };
      });
    }
  };
  onToggleImportant = (id) => {
    const idx = this.state.todoData.findIndex((el) => el.id === id);
    const oldItem = this.state.todoData[idx];
    const newItem = { ...oldItem, important: !oldItem.important };
    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];
      return {
        todoData: newArr,
      };
    });
  };
  onToggleDone = (id) => {
    const idx = this.state.todoData.findIndex((el) => el.id === id);
    const oldItem = this.state.todoData[idx];
    const newItem = { ...oldItem, done: !oldItem.done };
    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];
      return {
        todoData: newArr,
      };
    });
    // alert(id);
  };
  search(items, term) {
    if (term === "") {
      return items;
    }
    return items.filter((el) => {
      return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }
  onSearchChange = (text) => {
    this.setState(({ term }) => {
      return { term: text };
    });
  };
  onActiveItems = (data) => {};

  render() {
    const { todoData, term } = this.state;
    const visibleItems = this.search(todoData, term);
    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const todoCount = this.state.todoData.length - doneCount;
    return (
      <div className="App">
        <TodoHeader title={"Todo"} />
        <SearchPanel
          addTodos={this.addItem}
          textFilter={this.onSearchChange}
          activeItems={this.onActiveItems}
        />
        <TodoList
          todos={visibleItems}
          leftCase={todoCount}
          succedCase={doneCount}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
      </div>
    );
  }
}

export default App;
