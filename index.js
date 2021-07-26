//elements and variables (drop-down menu)
const menuButton = document.getElementById("drop-down-btn")
const items = document.getElementById("items")
var showItems = true

//elements and variables (tabs)
const tabOne = document.getElementById("tab-one")
const tabTwo = document.getElementById("tab-two")
const textArea = document.getElementById("text-area")
const text = {
    1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis dolor orci, eget elementum metus varius nec. Morbi eleifend finibus nunc quis blandit. Proin a aliquet enim. Donec ultrices blandit augue. Donec ut congue dolor. Sed ut felis nulla. Nullam eget tempus urna. Fusce at lacus purus. Pellentesque habitant morbi.",
    2: "leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed"
}

//event handlers (drop-down menu)
menuButton.addEventListener("click", function(){
    toggleDisplay()
    items.style.display = showItems ? "flex":"none"
})

//event handlers (tabs)
tabOne.addEventListener("click", function(){
    changeTab(1)
})
tabTwo.addEventListener("click", function(){
    changeTab(2)
})

//functions (drop-down menu)
function toggleDisplay(){
    showItems = !showItems
}

//functions (tabs)
function changeTab(number){
    textArea.textContent = text[number]
}