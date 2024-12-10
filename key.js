const numbers = [1, 2,3,4,5,6, 7];
const listItems = numbers.map((number)=>{
    <li key ={number.toString()}>{number}</li>
})

ReactDom.render(
    <ul>{listItems}</ul>,
    document.getElementById("root")
)