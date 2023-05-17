let foodList = document.getElementsByClassName("food-item");

for(let index = 0; index < foodList.length; index++){
    foodList[index].innerHTML += " My favourite food";
    if(index % 2 == 0) {
        foodList[index].style.color = "green";
    }else {
        foodList[index].style.color = "red";
    }
}