class TodoView {  // View is responsible for rending data
    constructor() {
        this.todoForm = document.querySelector(".todo-form");
        this.todoInput = document.querySelector("#newTodo");
        this.addBtn = document.querySelector("todo__actions--add");
        this.deleteBtn = document.querySelector("todo__action--delete");
        this.todoList = document.querySelector(".todolist");
    }

    createTodoElement(todo) {
        const todoElem = document.createElement("div");
        todoElem.classList.add("todo");
        todoElem.setAttribute("todo-id", todo.id)

        const todoTitle = document.createElement("div");
        todoTitle.classList.add("todo__title");
        todoTitle.innerText = todo.title;

        const todoActions = document.createElement("div");
        todoActions.classList.add("todo__actions");

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("todo__actions--delete");
        deleteBtn.innerText = "Delete";
        deleteBtn.setAttribute("remove-id", todo.id)

        const editBtn = document.createElement("button");
        editBtn.classList.add("todo__actions--edit");
        editBtn.innerText = "Edit";

        todoActions.appendChild(editBtn);
        todoActions.appendChild(deleteBtn);
        todoElem.appendChild(todoTitle);
        todoElem.appendChild(todoActions);

        return todoElem;
    }
    
    renderTodos(todos) {
        this.todoList.innerText = "";
        todos.forEach((todo) => {
          const todoElem = this.createTodoElement(todo);
          this.todoList.appendChild(todoElem);
        });

        // todos.forEach((todo) => {
        //   this.todoList.innerHTML += `
        //     <div class="todo">
        //         <div class="todo__title">${todo.title}</div>
        //         <div class="todo__actions">
        //             <button class="todo__action todo__action--edit">Edit</button>
        //             <button class="todo__action todo__action--delete" remove-id=${todo.id}>Delete</button>
        //         </div>
        //     </div>
        //     `;
        // });
    }

    appendTodo(newTodo) {
        const todoElem = this.createTodoElement(newTodo);
        this.todoList.appendChild(todoElem);
    }


    removeTodoFromView(id){
        const todoToRemove = document.querySelector(`[todo-id="${id}"]`);
        todoToRemove.remove();
    }
}


class TodoModel {
    #todos;
    constructor() {
        this.#todos = [];
    }
  
    async fetchTodos() {
        const todos = await API.getTodos();
        this.todos = todos;
        return todos;
    }
  
    async addTodo(newTodo) {
        const todo = await API.postTodo(newTodo);
        this.#todos.push(todo);
        return todo;
    }
  
    async deleteTodoById(id){
        await API.deleteTodo(id);
    }

    // fetchTodos() {
    //     return getTodos().then(todos => {
    //         this.todos = todos;
    //     })
    // }

    // addTodo(newTodo) {
    //     postTodo(newTodo).then(todo => {
    //         this.#todos.push(todo);
    //     });
    // }

    // deleteTodo() {
    //     this.todos.splice(index, 1);
    // }

    // editTodo() {
    //     this.todos[index] = todo;
    // }

    // getTodos() {
    //     return this.todos;
    // }
}


class TodoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.init();
    }

    init() {
        this.model.fetchTodos().then(() => {
            const todos = this.model.todos;  // get todo data from model
            this.view.renderTodos(todos);    // render todo to View
        });
        this.setUpAddTodo();
        this.setUpRemoveTodo();
    }

    setUpAddTodo() {
        this.view.todoForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const todoTitle = this.view.todoInput.value;
            this.model.addTodo(
                { 
                    title: todoTitle,
                    completed: false
                }
            ).then((newTodo) => {
                this.view.appendTodo(newTodo);
            });
        });
    }

    setUpRemoveTodo(){
        // this.view.getAllTodos.forEach(todoElem=>{
        //   todoElem.addEventListener('click', (e) => {
        //     const target = e.target;
        //     if(target.classList.contains('todo__actions--delete')){
        //       const idToRemove = target.getAttribute('remove-id');
        //       this.model.deleteTodoById(idToRemove).then(()=>{
        //         this.view.removeTodoFromView(idToRemove)
        //       })
        //     }
        //   })
        // })


        this.view.todoList.addEventListener('click', (e) => {
            const target = e.target;
            if(target.classList.contains('todo__actions--delete')) {
                target.setAttribute("disabled", "true");
                const idToRemove = target.getAttribute('remove-id');
                
                this.model
                    .deleteTodoById(idToRemove)
                    .then(()=>{
                        this.view.removeTodoFromView(idToRemove)
                    }).catch((err)=>{
                        console.log(err);
                        target.removeAttribute("disabled")
                    })
            }
        })
    }
}

const app = new TodoController(new TodoModel(), new TodoView());