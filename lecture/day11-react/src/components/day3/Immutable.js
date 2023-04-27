import React, { Component, useState } from "react";

const peopleList = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Sarah" },
  { id: 5, name: "Tom" },
];

let id = 6;


export default class Immutable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: peopleList,
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          const newPerson = {
            id: 6,
            name: "John"
          }
          this.state.people.push(newPerson);
          console.log(this.state.people);
        }}>Add Person</button>

        <div>{this.state.people.map((person) => {
            return <div key={person.id}>{person.name}</div>;
          })}
        </div>
      </div>
    )
  }
}
