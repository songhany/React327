import logo from './logo.svg';
import './App.css';
import Foo from './components/Foo'
import Whatever from './components/Foo'
import React from 'react';
import { Fragment } from 'react';

const isShown = true;

const friends = {
  name: "david"
}

const peopleList = [
  { id: 1, name: "Alice", gender: "Female", age: 25 },
  { id: 2, name: "Bob", gender: "Male", age: 30 },
  { id: 3, name: "Charlie", gender: "Male", age: 40 },
  { id: 4, name: "Diana", gender: "Female", age: 28 },
  { id: 5, name: "Eve", gender: "Female", age: 22 },
];

function App() {
  return (
    <div className="App">
      <Foo name="jack" age={20} canDrink={true} 
        friends= {
          {name: "David"}
        }/>

      <div>Calculate Number: {1+1}</div>

      <div>
        {((name) => {
            console.log("friend", name);
            return "div tag with function return content";
          })("john")}
      </div>

      <div>
        { isShown ? <div>show this element</div> : null }
      </div>

      <div>
        <h3>array</h3>
        <div>
          {peopleList
            .filter((person) => {
              return person.age > 25;
            })
            .map((person) => {
              console.log(person);

              return (
                // we need unique "key" prop for performance
                <Fragment key={person.id}>
                  <div>{person.name}</div>
                  <div>{person.age}</div>
                </Fragment>
              )
            })}
        </div>
      </div>
      {/* <Whatever name="Songhan" age={18}/> */}
    </div>
  );
}

export default App;


// keep components pure

// pure function
// 1. same input => same output
// 2. it should not produce side effects