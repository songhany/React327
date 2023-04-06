// Pros is only need to modify code in this file

const API = (() => {
  const API_URL = "http://localhost:3000/todos";
  // reuturn a promise that will resolve to the todos

  // return a promise that will resolve to the todos
  // function getTodos() {
  //   return fetch(API_URL).catch(res=>res.json());
  // }

  const getTodos = async() => {
    const res = await fetch(API_URL);
    return await res.json();
  }

  const postTodo = async(newTodo) => {
    const res = 
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
      })
    return await res.json();
  }
  // postTodos({ id: 4, title: "new Todo", completed: false})

  const deleteTodo = async(id) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    // return await res.json();
  }

  return {
    getTodos,
    postTodo,
    deleteTodo,
  };
})();