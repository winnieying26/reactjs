function fetchWeather(){
    return new Promise((resolve, reject)=>{
        fetch("https://api.weather.gov/gridpoints/OKX/35,35/forecast")
        .then(response => response.json())
        .then(data => resolve(data.properties.periods[1].temperature)
    );
    })
}

function displayData(data){
    console.log(data)
}

function onError(err){
    console.log(`Error: ${err}`)
}

fetchWeather()
.then(displayData)
.catch(onError)