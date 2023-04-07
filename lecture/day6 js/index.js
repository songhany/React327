// data types
// value vs reference

// Array.prototype.map

// function
// scopes and closures
// while, if, for, switch
// bascis OOP, class Constructor and function constructor

// const book = {
//   name: "Calculus 1",
//   author: "Brandon",
//   date: "xxxx",
// };

// function Book(name,author,date){
//     this.name = name;
//     this.author = author;
//     this.date = date;
// }

// Book.prototype.getSummary = ()=>{
//     console.log(this)
//     console.log("The book", this.name, "is written by ",this.author);
// }

// class Book {
//   constructor(name, author, date) {
//     this.name = name;
//     this.author = author;
//     this.date = date;
//   }

//   getSummary() {
//     console.log("The book", this.name, "is written by ", this.author);
//   }
//   isPublishedBefore(date) {
//     return this.date < date;
//   }
// }

// const book1 = new Book("Deep Work", "cal", 2000);
// const book2 = new Book("Calculus 1", "Einstein", 1000);
// book1.getSummary();
// book2.getSummary();
// console.log(book1);
// console.log(book2);

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   breath() {
//     console.log(this.name, "breath");
//   }

//   eat() {
//     console.log("eat");
//   }
// }

// class Bear extends Animal {
//   constructor(name, fur) {
//     super(name);
//     this.fur = fur;
//   }

//   eat() {
//     console.log(this.name, "eat meat");
//   }

//   hasPaws() {
//     return true;
//   }
// }

// class Bull extends Animal {
//   hasHorn() {
//     return true;
//   }
// }

// const bear = new Bear("bear 1");
// bear.breath();
// bear.eat();
// console.log(bear.hasPaws());

// const bull = new Bull("bull 1");
// bull.breath();
// bull.hasHorn();

// const obj = {
//     a: 1,
//     b: 2,
//     getSum(){
//         console.log(this.a + this.b);
//         // return this.a + this.b;
//     }
// }

// when a function is a method, it refers to the
// object that is invoking it
// obj.getSum()

//in global scope/functional scope, this is window
// console.log(this===window);
// function foo(){
//     console.log("foo",this);
// }
// foo()

// class Numbers {
//     constructor(a,b){
//         this.a = a;
//         this.b = b;
//     }

//     getSum = () => {
//         console.log("this",this)
//         console.log("sum",this.a+this.b)
//         // return this.a+this.b
//     }
// }

// const nums = new Numbers(1,2);
// nums.getSum()
// console.log(nums);

// console.log(nums.getSum)
// const foo = nums.getSum.bind(nums);
// foo();

// console.log(window)
// console.log(typeof foo === "function")

// foo()

// const obj = {
//     a: 1,
//     b: 2,
//     multiplier: 20,
//     getSum(){
//         // const outerThis = this;

//         setTimeout(()=>{
//             // const innerThis = this;
//             // console.log(innerThis === outerThis);
//             console.log(this.a+this.b)
//         },1000)

//     },
//     // logNums(){
//     //     [10,20,30].forEach((function(num){
//     //         console.log(this)
//     //         console.log(num * this.multiplier)
//     //     }).bind(this))
//     // }
// }

// obj.getSum();

// const arrowFn = () => {
//     console.log(this)
// }

// function foo(){
//     console.log("foo",this);
// }

// arrowFn()
// foo()

// class Bar {
//     #a;
//     constructor(a){
//         this.#a = a;
//     }

//     getA(){
//         return this.#a;
//     }

//     setA(newA){
//         this.#a = newA;
//     }
// }

// const bar = new Bar(1);

// console.log(bar)
// bar.setA(1000)
// console.log(bar.getA())

function bar() {
  let numbers = [];

  return {
    numbers,
    addNum: (newNum) => {
      numbers.push(newNum);
    },
    clear: () => {
      numbers = [];
    },
  };
}

// const nums = bar();
// console.log(nums.numbers);
// nums.addNum(1)
// nums.addNum(1)
// nums.addNum(1)
// nums.addNum(1)
// nums.addNum(1)
// console.log(nums.numbers);

// function baz(){
//     let count = 0
//     return ()=>{
//         count++
//         return count;
//     }
// }

// const addCount = baz();
// console.log(addCount());
// console.log(addCount());
// console.log(addCount());
// console.log(addCount());

//IIFE immediately invoked function expression
// (()=>{
//     console.log("hello")
// })()

const x = (a) => (b) => (c) => a + b + c;

console.log(x(5)(10)(35));

//default arg value
// function foo(a=5,b=10){
//     console.log(a+b)
// }

// foo(2000)

// const multiply = (num) => 2 * num;

const values = []
function storeValue(value){
    values.push(value);
}

[1,2,3,4,5].forEach((e)=>storeValue(e))
console.log(values)


