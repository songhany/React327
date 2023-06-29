// JavaScript: EcmaScript + WEB APIS
// NodeJS: EcmaScript + NODE APIS
// EcmaScript: Syntax Standard

// primitive (passing by value, imutable)
// console.log("abc", typeof "abc");
// console.log(5, typeof 5);
// console.log(5.1, typeof 5.1);
// console.log(true, typeof true);
// console.log(undefined, typeof undefined);
// console.log(null, typeof null);
// BigInt | Symbol

// undefined vs not defined


// passing by value
// let a = 5;
// function foo(input) {
//     input = 6;
//     console.log(input)
// }
// foo(a);
// console.log(a)

// object data (passing by referecne)
// console.log(typeof [1, 2])
// console.log(typeof { name: 'patrick' })
// console.log(typeof new Date())
// console.log(typeof new Set())
// console.log(typeof function () { })

// let obj = { name: 'patrick', age: 18 }
// function foo(input) {
//     input.name = "sam"
//     console.log(input) // sam
//     console.log(obj) // sam

//     input = { name: "changed", age: 12 }
//     console.log(input) // changed
// }

// foo(obj)
// console.log(obj) // ??? sam

// prototype in JS
// const arr = [1, 2, 3];
// arr.hello = function () {
//     console.log("hello")// hello
// }

// console.log(arr.hello())

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.say = function () {
//             console.log('hello')
//         }
//     }
//     talk() {
//         console.log('talk')
//     }
// }

// function Person(name, age) {
//     // what is new key word doing
//     // const return instance
//     // const instance = {}
//     // instance.name =name;
//     // instance.age =age
//     // return instance
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function () {
//     console.log('talk')
// }


// const p = new Person("patrick", 18);
// const p2 = new Person("patrick", 18);
// console.log(p)

// console.log(p.say === p2.say)
// console.log(p.talk === p2.talk)


// console.log(p)
// p.say()
// p2.say()

// p.talk()
// p2.talk()

// console.log(typeof Person)

// const a = [1, 2, 3]| new Array()

// const a = {} | new Object({})







