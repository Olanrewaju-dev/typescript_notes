# Typescript notes

created: 25th Jan. 2024
updated: 28th Jan. 2024

The browser does not understand Ts. Ts code has to be compiled down to Js code for browser execution.

The command to compile Ts file to Js is:
`tsc filename.ts`

To continually watch for changes in the Ts file, add '-w' flag to the compile command like this:
`tsc filename.ts -w`

Explicit and implicit type declaration. When a variable type is initialized implicitly, it means Ts automatically inferes the type. Whereas, explicit declaration refers to variable type declaration during initialisation.

- Ts does type check during runtime and not at compile time like Js which helps to minimise errors down the line.

## Explicit types, Union types and dynamic types

- Explicit type let us declare the type of a variable during declaration. Eg.

```
let name: string = "ola"
```

- Union types let us add multiple data type into an array at declaration. Eg.

```
let arr: (string|number|boolean)[] = [4, "ola", False];
```

- dynamic type also known as any type typically reverses the functionality of Ts back to Js because it allows for a type to be any type. Eg.

```
let data: any = 25;
data = "Underdevelopment";
```

## Functions in Ts

There is a function type in Ts. It can be initialized like this:

```
let greet = Function;
```

Notice, I used capital 'F'. Now, I can set great to a function like this:

```
greet = () => {
    console.log("Hello there")
}
```

Function can also take in explicit arguement types and even an optional arguement type. Let see that in action.

```
greet = (name: string, age?:number) => {
    console.log("hello there! I'm " + name)
}
```

You'll notice that in the function above, I passed to explicit arguement types of string and number. The number args is optional i.e. if passed or not, no error is thrown inside the console.

Quick note: pass in optional parameter/args at the end or as the last item.

Ts inferes the return type of a function. And where a function does not return a type, it sets it to void. However, we can explicitly set the return type like this:

```
greet = (name: string, age?:number): string => {
    return "hello there! I'm " + name;
}
```

By adding the string data type at the end of the parameter/arguement parenthesis, I've explicitly declarated the return type of the greet function. This is useful especially when working with large function and other developers.

### Aliases

Aliases are declared with the keyword `type`. You'll use an alias to store long-winded parameters or function arguements.
Let me demonstrate with the following code block:

```
const logs = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}
```

From the above, the parameter is a tad bit long and if we'll be having multiple functions with same parameter, we can convert the parameter into an alias like this:

```
type StrOrNum = string | number;

const logs = (uid: StrOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}
```

## Classes in Ts

A class in Ts is similar to class in Js with few exceptions. Once class property declaration and type assignment is done, instances of the class cannot change the type of the properties. See code demonstration below:

```
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        console.log(`this ${this.client} owes ${this.amount} for ${this.details}`)
    }
}

const invOne = new Invoice("mario", "web design", 200)
const invTwo = new Invoice("luigi", "graphic design", 120)

// this is not allowed in Ts
invTwo.amount = "one thousand pound";
// and that's because the amount property type has been set to number at declaration.
```

### Class property access modifier (public, private, readonly) in Ts

By default, class properties are set to public event though the keyword is not written.

```
class Invoice {
    readonly client: string;
    private details: string;
    public amount: number;
}
```

You'll notice in the above that aside public access modifier, I've also added readonly and private. These are the three types of class access modifiers.

- public: the property can be accessed and re-assigned outside the class.
- private: the property cannot be accessed outside the class.
- readonly: the property can only be read outside the class but it cannot be re-assigned.

## Workflow and tsconfig

For large projects, it is advisable to initialise a Ts config file. To do this, run this command in the terminal:

```
tsc -init
```

In a Nodejs application using npm, run this command to initialize Ts: `npx tsc init`.

This will create a `tsconfig.json` file. Inside this json file, you'll need to edit the outdir and rootdir entries to specify where you want to point to. Typically, the rootdir will point to the `./src` folder while the outdir will point to where the compiled Ts code should be store which is the `./public` folder.
