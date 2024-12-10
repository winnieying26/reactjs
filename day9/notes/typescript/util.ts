function add5(x: number, y: number): number{
    return x+y
}

function sub(x: number, y: number): number{
    return x-y
}

function test(){
  return "test"
}


export{add5, sub}
export default test; // one default export => can change the name