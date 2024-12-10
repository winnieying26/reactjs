function getWeather(){
    return new Promise(function(resolve, reject) {
        reject("Sunny");
    })
}


const promise = getWeather();

promise.then(
function(data){
console.log(`First param ${data}`)
}, 
function(data){
console.log(`Second param ${data}`)
}
)