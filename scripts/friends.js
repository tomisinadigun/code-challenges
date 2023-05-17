let container = document.getElementById("container");

let friendList = ["Seyi", "Dammy", "David", "Glory"];




for (let friend of friendList) {
    const h3 = document.createElement("h3");
    h3.innerHTML = `Hello ${friend}, welcome to GoMyCode`;
    h3.style.color = "green"
    container.appendChild(h3);
}
