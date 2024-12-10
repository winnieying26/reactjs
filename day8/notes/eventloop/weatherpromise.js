function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Cloudy");
    }, 100);
  });
}

function getWeatherIcon(weather) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      switch (weather) {
        case "Sunny":
          resolve("It's a Sunny day!");
          break;
        case "Rainy":
          resolve("It's a rainy day!");
          break;
        case "Windy":
          resolve("It's a windy day!");
          break;
        default:
          reject("No weather infos");
      }
    }, 500);
  });
}

function onSuccess(data) {
  console.log(`Data: ${data}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

getWeather().then(getWeatherIcon).then(onSuccess, onError);
