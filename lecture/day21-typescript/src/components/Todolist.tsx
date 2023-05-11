import React from 'react'
// import { Todo } from './Todo'
import { Todo } from '../type/todo'

type TodoListProp = {
  todos: Todo[]
}

// export const Todolist = ({ todos }: TodoListProp): JSX.Element => {
  
//   return (
//     <div>
//       {todos.map(todo => {
//         return <div key={todo.id}>
//             {todo.title}
//           </div>        
//       })}
//     </div>
//   )
// }

const Todolist: React.FC<TodoListProp> = ({ todos }) => <div>
  {todos.map(todo => {
    return <div key={todo.id}>
        {todo.title}
      </div>        
  })}
</div>
export default Todolist

// export default function Todolist(props:TodoListProp) {
//   const {todos} = props;

//   return (
//     <div>
//       {todos.map(todo => {
//         return <div key={todo.id}>
//             {todo.title}
//           </div>        
//       })}
//     </div>
//   )
// }
