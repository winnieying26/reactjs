// variables defined inside a function cannot be access from anywhere outside of the function
// function can access all the variable  and functions inside the scope that it is defined

function doSomething(){
    let x = 20;
    const y = 30;
    var z = 40;
 console.log(x,y,z)
}
doSomething()

let x = 20;
const y = 30;
var z = 40;
function doSomethingElse(){
    console.log(x, y, z)
}

doSomethingElse()

// 在函数里面定义的变量跟函数不可以从函数外面访问
// 函数可以访问所有定义在函数内的变量跟函数