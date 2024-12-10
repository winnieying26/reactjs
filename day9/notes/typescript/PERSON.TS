interface Person{
    name: string;
    age: number;
    height? : number;
    hello: ()=> void;
}

const person : Person ={
    name: "John",
    age: 34,
    hello: function(){
        console.log(`${this.name} says hi`)
    }
}
person.hello()
interface Employee extends Person{
    employeeId: number
}

const worker: Employee = {
    name: "Jane",
    age: 34,
    height: 178,
    hello: function(){
        console.log(`${this.name} says hi`)
    },
    employeeId: 10005
}

// utility type : partial /Readonly/ Record/ Pick
interface Todo{
    title: string;
    description: string;
}

const updateTodo = (todo: Partial<Todo>) => {
    todo.title = "Make tea"
}

//Readonly

interface Todo1{
    title: string;
    description: string;
}

const myTodo:Readonly<Todo1> = {title: "Make dinner", description: "Make dinner for your family"};

interface PageInfo {
    title: string
}

// Record
const pages : Record<string, PageInfo> = {
    home : {title: "Home"},
    about: {title: "About"},
    contact: {title: "Contact"}
};

const pageNumber : Record<number, PageInfo> = {
    0 : {title: "Home"},
    1 : {title: "About"},
    2 : {title: "Contact"}
};

//Pick
interface Todo2 {
    id: number;
    title: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo2, "title" | "completed" >; // alias

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
}

interface Todo3 {
    id: number;
    title: string;
    completed: boolean;
}

type TodoPreview2 = Omit<Todo3, "id">; // omit what we don't want to keep

const todo2: TodoPreview2 = {
    title: "Clean room",
    completed: false,
}