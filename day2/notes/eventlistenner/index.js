/*Event Listener
element.addEventListener("click", function)*/

const buttonTwo = document.querySelector(".btn-2");

function alertBtn(){
    alert("I love JavaScript too")
}

buttonTwo.addEventListener("click", alertBtn);

// mouseover
const newBackgroundColor = document.querySelector(".btn-3")

function changeBackgroundColor(){
    newBackgroundColor.style.backgroundColor = "blue";
}

newBackgroundColor.addEventListener("mouseover", changeBackgroundColor);

// reveal event

const revealBtn = document.querySelector(".reveal-btn");

const hiddenContent = document.querySelector(".hidden-content");

function revealContent(){
    if(hiddenContent.classList.contains("reveal-btn")){
        hiddenContent.classList.remove("reveal-btn");
    }else{
        hiddenContent.classList.add("reveal-btn");
    }
}
localStorage.setItem("name", "Ying");
localStorage.removeItem("name");
localStorage.setItem("name", "Jane");
sessionStorage.setItem("name", "Joe");
//sessionStorage.removeItem("name");

console.log(localStorage.getItem("name"));

document.cookie = "name=Ying; expires=" + new Date(2024, 12, 1).toUTCString()

revealBtn.addEventListener("click", revealContent);