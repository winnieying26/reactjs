function fetchData(){
    return new Promise((resolve, reject)=>{
       fetch("https://api.weather.gov/gridpoints/OKX/35,35/forecast")
       .then(response => response.json())
       .then(data => resolve(data))
       .catch(err =>reject(err) )
    })
}

function displayData(data){
    console.log(data)
}

function errorOccurr(err){
    console.log(err)
}

const promise = fetchData();
promise
.then(displayData)
.catch(errorOccurr)