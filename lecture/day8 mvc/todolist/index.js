class TodoView {
  constructor() {
    this.todoForm = document.querySelector(".todo-form");
    this.todoInput = document.querySelector("#newTodo");
    this.addBtn = document.querySelector("todo__actions--add");
    this.DeleteBtn = document.querySelector("todo__action--delete");
    this.todoList = document.querySelector(".todolist");
  }

  renderTodos(todos) {
    // this.todoList.innerHTML = ``
    node
  }

  createTodoElement(todo) {
    const todoElem = document.createElement("div");
    todoElem.classList.add("todo");
    const todoTitle = document.createElement("div");
    todoTitle.in
  }
}

class TodoModel {
  #todos;
  constructor() {
    this.#todos = [];
    this.init();
  }

  init() {
    getTodos.then(todos => {
      this.todos = todos;
    })
  }

  addTodo(newTodo) {
    postTodo(newTodo).then(todo => {
      this.#todos.push(todo);
    });
  }

  deleteTodo() {
    this.todos.splice(index, 1);
  }

  editTodo() {
    this.todos[index] = todo;
  }

  getTodos() {
    return this.todos;
  }
}


class TodoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }



}

const app = new TodoController(new TodoModel(), new TodoView());