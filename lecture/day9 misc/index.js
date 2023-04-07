// // demonstrate the use of spread operator
// const arr1 = [1, 2, 3, 4, 5];

// const arr2 = [...arr1];
// arr2[0] = 10;
// console.log("arr1",arr1)
// console.log("arr2",arr2)


// const obj1 = {
//     name: "John",
//     age: 30
// }

// const obj2 = {...obj1}
// obj1.name = "Doe"
// console.log("obj1", obj1)
// console.log("obj2", obj2)

// // drawback of spread operator

const person1 = { name: "John", age: 30 };
const person2 = { name: "Doe", age: 40 };
const person3 = { name: "Jane", age: 50 };

const people1 = [person1, person2, person3];

// const people2 = [...people1]; // shallow copy

// console.log("people1===people2", people1 === people2);
// console.log("people1[0]===peopl2[0]", people1[0] === people2[0]);


// // deep copy
// const people2 = JSON.parse(JSON.stringify(people1))

// // drawback of JSON.parse(JSON.stringify())

const obj1 = {
    name: "John",
    job: null,
    children: undefined,
    getName(){
        return this.name
    }
}

// const obj2 = JSON.parse(JSON.stringify(obj1))
// console.log("obj2",obj2)



// Things to review
// 1. learn how to use JSON-server (5-10min)
// 2. fetch, promise, async/await, api request
// 3. MVC pattern, Class
// 4. DOM manipulation
// 5. basics about form, eventListeners, inputs, buttons
// 6. arrays, objects, and some prototype methods
// 7. basic styles, layout: flex, grid,
// 8. try to implement what we taught
// 9. practice building todo-list
// 10. primitive vs reference types
// 11. how to push code to github