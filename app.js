document.addEventListener("DOMContentLoaded", function () {
var friends = [
    "Adrian",
    "Jessica",
    "Melissa",
    "Jackie",
    "Cris"
]
var locationName = [
    "Pelham",
    "Hoover", 
    "Birmingham",
    "Walmart",
    "Target",
    "Minneapolis",
    "Miami",
    "Pelham High School",
    "Waffle House",
    "2 Pesos",
    "Chipotle",
]
var weapons = [
    "Table",
    "chair",
    "ladder",
    "Rope",
    "Paper Clips",
    "Keyboard",
    "Mouse",
    "Xbox Controller",
    "Pistachio Shell",
    "Tylenol",
    "Picture Frame",
    "Pillow",
    "Blankets",
    "Computer",
    "Water Bottle",
    "Keys",
    "Charger",
    "Wallet",
    "Glasses",
    "Glass Cup",
    "Silly String",
]
for (i = 1; i < 101; i++) {
 let h3 = document.createElement('h3')
 h3.innerHTML = `Accusation ${i}`
 h3.addEventListener("click", makeAlert(i));
 document.body.appendChild(h3)
    
}
function makeAlert(i) {
    function newAlert() {
        alert(`Accusation ${i}: I accuse ${friends[i % friends.length]}, with the ${weapons[i % weapons.length]} in the ${locationName[i % locationName.length]}`)
    }
    return newAlert;
}




});