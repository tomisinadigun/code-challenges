let currentCar = document.getElementById("car-img");

currentCar.src = "images/car2.jpg"



// get container from html 
let container = document.getElementById("container")


// create element 
const sectionTitle = document.createElement("h2");
const introText = document.createElement("p");

sectionTitle.innerHTML = "About GoMyCode";
introText.innerHTML = "GoMyCode is the best software school in lagos. please join us."

const brandImg = document.createElement("img")
brandImg.style.width = "200px"

brandImg.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDaa2FVN9ClLQJGmQuadtrdj0xjHWJ9Wt2yHK70nJhlg&s")

// append element to container
container.appendChild(sectionTitle)
container.appendChild(brandImg)
container.appendChild(introText)