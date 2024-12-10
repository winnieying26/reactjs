// closure => nexted functions

function outer(x) {
  function inner(y) {
    return x + y;
  }
  return inner;
}

const outerReturn = outer(10); 
/* outerReturn => function inner(y) {
    return x + y;
  }*/
console.log(outerReturn)
console.log(outerReturn(2))

// when outer function stop executing, inner function still have access to the variable x

const myName = "Harry";
function printName(){
  console.log(myName)
}
printName()


function stock(){
  let stockNums = 0;
  function buyStock(num){
     stockNums += num;
     return stockNums;
  }
  function sellStock(num){
    if(num < stockNums){
      stockNums -= num;
      return stockNums;
    }else{
      stockNums = 0;
      return stockNums
    }
  }
  return {
    buyStock,
    sellStock
  };
}