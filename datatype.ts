// explicit types
let character: string;
let age: number;
let isBoolean: boolean;

character = "ola";
age = 30;
isBoolean = true;

// union types
let arr: (string | number | boolean)[]; // the data types inside the parenthesis after the
// the variable declaration makes the array to allow multiple data types.

let charac: string | number;

// dynamic type
let mixed: any = 25;
mixed = false;
mixed = "titi";
// by using the keyword any, it revert Ts back to Js because it allows
// any type
