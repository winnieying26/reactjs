function getRandomNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = (Math.random()*100).toFixed(0);
       num = parseInt(randomNum, 10)
      resolve(num);
    }, 2000);
  });
}

function displayNum(num) {
  console.log(num);
}

function errorHandling(err) {
  console.log(err);
}
const random = getRandomNum();

random
.then(displayNum)
.catch(errorHandling);
