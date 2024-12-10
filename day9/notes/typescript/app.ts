import {add5, sub} from "./util"

/*const coords : [number, number][] = [
    [1, 2],[1,-3]
]

const coords1: [number, number[]] []= [
    [1, [1,2]], [1,[3, 4]]
]

coords[0][1]

// literals
let direction : "north" | "south" | "east"|"west"

let responseCode:  200 | 404 | 201 | 400;


enum Size {
    Small=0,
     Medium = 5, 
     Large= 10
}

let size : Size = Size.Small;
if(size === Size.Small){
    console.log("Size Small")
}

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}*/

let x : unknown = 1;
let y : unknown = 1;
if(typeof y == "number"){
    const result = y+1;
}else if(typeof y == "string"){
    const result = y.length;
}

//type casting
const result = (x as number) + 1


const names =[{name: "John"},{name: "James"}, {name: "Jane"} ]
// handle undefined ?
const el = names.pop()?.name;

// ! force the type not to be undefined
const el1 = names.pop()!.name;

function add(x: number, y: number){
    return x+y
}


function makeName(
    firstName: string,
    lastName: string,
    middleNmae : string = "middle" // can be undefined
){
    if(middleNmae) return firstName + " " + middleNmae + " " + lastName;
    return firstName + " " + lastName;
}

function callFunc(
    func : (f: string, l: string, m?: string) => string,
    param1: string,
    param2: string
){
 func(param1, param2)
}

const myName = callFunc(makeName, "Ying", "Quan")


function mul(x: number, y : number) : number{
    return x*y
}

function div (x: number, y : number) : number {
    return x/y
}

function applyFunc( funcs:((a: number, b: number)=>number)[] , values:[number, number][]) : number[] {
const results = [] as number[];
for(let i =0; i< funcs.length; i++){
    const args = values[i];
    const result = funcs[i](args[0], args[1])
    results.push(result);
}
return results;
}

applyFunc([mul, div], [[1, 2],[4, 5]]); // 2, 0.8

function sum(...numbers: number[]){

}

sum(1, 2, 3);
sum(1, 2)
sum(1, 2, 3, 4, 5,6)

//overload functions : 

// function getItemLength(value: string | string[], value2: string | string []){}

function getItemLength(name: string): number;
function getItemLength(names: string[]): number;
function getItemLength(names: string[]): string;
function getItemLength(nameOrNames: unknown) : unknown{
    if(typeof nameOrNames === "string"){
       return nameOrNames.length;
    }else if(Array.isArray(nameOrNames)){
        return nameOrNames.length;
    }
    return 0;
};


const result5 = add5(1, 2);
console.log(result5)