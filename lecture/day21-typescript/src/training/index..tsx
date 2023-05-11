import { useState } from "react";

export const iAmString = 'a';


const firstName: string = "Joe";
const age: number = 12;
const canDrink: boolean = age >= 21;
const undefinedStuff: undefined = undefined;
const nullll: null = null;

let anything: any = '123123';  // any type

type genderType = "M" | "F" | "N";  // Unions type

// type personType = {
//   name: string;
//   age: number;
//   gender: genderType;
// }

interface personInterface {
  name: string;
  age: number;
  gender?: genderType;  // '?' make property optional, you don't have to provide this property
}

const p1:personInterface = {
  name: "Songhan",
  age: 18,
  // gender: "M"
}


const numbers: number[] = [1,2,3,4,5,6]
// numbers.push(5)

type specialArrType = [string, number, boolean];
const specialArr: specialArrType = ["a", 1, true];
const numStrArr: (number|string)[] = [1,2,4,"12","1124","12512"];
const people: personInterface[] = [p1,p1,p1,p1,p1];
// people[0].name = "Yu"
// console.log(people);

function sum(a:number, b:number):number {
  return a+b;
}


// function makeNumArr(...nums:number[]) {
//   return nums;
// }
// const arrNum = makeNumArr(0,1,1,2,3,5,8,13);
// console.log(arrNum);  // [0, 1, 1, 2, 3, 5, 8, 13]


// function makeStringArr(...strings:string[]) {
//   return strings;
// }
// const arrString = makeStringArr("1,","","","Songhan");
// console.log(arrString);  // ['1,', '', '', 'Songhan']

function makeArr<T>(...args:T[]):T[] {  // T generic type
  return args;
}
makeArr<number|string>(1,2,3,4,5,"123");
makeArr<string>("1,","","","Songhan");


// function test(a:number):number|string {
//   if (a>10) {
//     return "string"
//   }
//   return 123;
// }
// console.log(test(111));
// console.log(test(1));

