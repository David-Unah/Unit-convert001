const details = document.getElementsByClassName("perferred--unit")
const measureList = document.getElementsByClassName("measure--list")
const button = document.getElementsByTagName("button")
const input = document.getElementById("input")
const result = document.getElementById("result")
const list = document.getElementsByClassName("list")
const meter = document.getElementById("meter")
const feet = document.getElementById("feet")

for(let i = 0; i < details.length; i++) {
details[i].addEventListener('click', function() {
    measureList[i].classList.toggle("show")
})}



for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        button[i].classList.toggle("button-color")
    })
}
   

input.addEventListener("input", function() {
    result.textContent = input.value
})

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        list[i].classList.toggle("darken")
        let clickedList = list[i].textContent
        meter.textContent = clickedList
        measureList[i].classList.toggle("show")
    })
}
