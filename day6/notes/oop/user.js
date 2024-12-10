class User{
    static userCount = 0;
    constructor(userName){
        this.userName = userName;
        User.userCount++;
    }
    sayHello(){
        console.log(`Hello, my username is ${this.userName}`)
    }
    static getUsers(){
        console.log(`There are ${User.userCount} users in the database`)
    }
}

const user1 = new User("Jojo");
const user2 = new User("Yolo");
const user3 = new User("LuLU");

console.log(user1.userName);
user3.sayHello()
console.log(User.userCount);
User.getUsers()