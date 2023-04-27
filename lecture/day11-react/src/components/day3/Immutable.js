import React, { Component, useState } from "react";

const peopleList = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Sarah" },
  { id: 5, name: "Tom" },
];

let id = 6;  // Shouldn't do this in real project, just a temporary solution to get rid of error


export default class Immutable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: peopleList,
      host: {
        name: "Jack"
      }
    }
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          const newPerson = {
            id: id++,
            name: "John"
          }
          // this.state.people.push(newPerson)  // Important: Don't mutate the state directly in React. https://stackoverflow.com/questions/37755997/why-cant-i-directly-modify-a-components-state-really
          const newPeopleList = [...this.state.people, newPerson];
          this.setState({people: newPeopleList});
        }}>Add Person</button>

        <div>
          {this.state.people.map((person) => {
            return <div key={person.id}>{person.name}</div>;
          })}
        </div>
      </div>
    )
  }
}


// export default function Immutable() {
//   const [people, setPeople] = useState(peopleList);

//   function handleAddPerson() {
//     const newPerson = {
//       id: 6,
//       name: "John",
//     };
//     people.push(newPerson)  // Mistake 1. Shouldn't mutate the state directly without using setPeople
//     setPeople(people)  // Mistake 2. 'people' here is the same memory address as 'people' in line 40, so React think the prevState is same as currState. React think state didn't change, because 'people' is the reference and the memory address is the same, so it will not rerender to update UI
//   }

//   return (
//     <div>
//       <button onClick={handleAddPerson}>Add Person</button>
//       <div>
//         {people.map((person) => {
//           return <div key={person.id}>{person.name}</div>;
//         })}
//       </div>
//     </div>
//   );
// }
