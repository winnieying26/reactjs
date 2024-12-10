// it takes one or more functions as argument
// it may return a function 

function getCapture(camera){
    camera()
}

getCapture(function(){
    console.log("Canon")
})

function returnFn(){
    return function(){
        console.log("Returning")
    }
}

const fn = returnFn;
console.log(fn)