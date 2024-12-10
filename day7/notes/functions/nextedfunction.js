// nexted function => a function defined inside other function

function outer(){
    console.log("Outer");
    function inner(){
        console.log("Inner")
    }
    inner();
}

console.log(outer())