const API = (() => {
    const API_URL = "http://localhost:3000/todos";
  
    // return a promise that will resolve to the todos
    // function getTodos() {
    //       return fetch(API_URL).catch(res=>res.json());
    // }
  
    const getTodos = async () => {
      const res = await fetch(API_URL);
      return await res.json();
    };
  
    const postTodo = async (newTodo) => {
      const postedTodo = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      return await postedTodo.json();
    };
  

    const deleteTodo = async (id) => {
      const deletedTodo = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      // return await deletedTodo.json();
    };
  
    return {
      getTodos,
      postTodo,
      deleteTodo,
    };
  })();