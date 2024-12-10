function fetchUser(){
    return new Promise((resolve, reject)=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(users => resolve(users))
    })
}
function getUserNames(users){
    if(users){
        const usersNames = users.map(user => user.name)  
        console.log(usersNames)   
    }
    
}

function getUserEmail(users){
    if(users){
        const emails = users.map(user => user.email);
        console.log(emails)
    }
}

function errorHandling(err){
    console.log(`Error: ${err}`)
}

const users = fetchUser();
users
//.then(getUserNames)
.then(getUserEmail)
.catch(errorHandling)