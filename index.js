//get elements
const menuButton = document.getElementById("drop-down-btn")
const items = document.getElementById("items")

var showItems = true

//event handlers
menuButton.addEventListener("click", function(){
    console.log("clicked")
    toggleDisplay()
    items.style.display = showItems ? "flex":"none"
})

//functions
function toggleDisplay(){
    showItems = !showItems
}