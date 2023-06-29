import React, { Component } from "react";

export default class TodolistClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTitle: "",
    };
  }

  addTodo() {
    const newTodo = {
      id: Math.random(),
      userId: 1,
      title: this.state.newTitle,
      completed: false,
      editing: false,
    };

    const newTodos = [...this.state.todos, newTodo];
    this.setState({ todos: newTodos, newTitle: "" });
  }

  removeTodo(todoId) {
    const newTodos = this.state.todos.filter((todo) => todo.id !== todoId);
    this.setState({ todos: newTodos });
  }

  editTodo(todoId) {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, editing: true };
      } else {
        return todo;
      }
    });
    this.setState({ todos: newTodos });
  }

  saveTodoTitle(todoId) {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, title: this.state.newTitle, editing: false }; // Update title directly with new value from input field
      } else {
        return todo;
      }
    });
    this.setState({ todos: newTodos, newTitle: "" }); // Clear input field
  }

  render() {
    return (
      <div className="todo-list">
        <h1>Todo List</h1>
        <input
          value={this.state.newTitle}
          onChange={(e) => this.setState({ newTitle: e.target.value })}
        />
        <button onClick={() => this.addTodo()}>ADD todo</button>

        <div>
          {this.state.todos.map((todo) => {
            if (todo.editing) {
              return (
                <div key={todo.id}>
                  <input
                    value={this.state.newTitle} // Use the input field value for editing
                    onChange={(e) => this.setState({ newTitle: e.target.value })}
                  />
                  <button onClick={() => this.saveTodoTitle(todo.id)}>SAVE</button>
                </div>
              );
            } else {
              return (
                <div key={todo.id}>
                  {todo.title}
                  <button onClick={() => this.removeTodo(todo.id)}>REMOVE</button>
                  <button onClick={() => this.editTodo(todo.id)}>EDIT</button>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}