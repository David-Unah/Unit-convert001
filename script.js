const details = document.getElementsByClassName("perferred--unit")
const measureList = document.getElementsByClassName("measure--list")
const button = document.getElementsByTagName("button")
const input = document.getElementById("input")
const result = document.getElementById("result")


for(let i = 0; i < details.length; i++) {
    let listClick = details[i]   
    listClick.addEventListener('click', function() {
    measureList[i].classList.toggle("show")
})}




// top buttons
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        button[i].classList.toggle("button-color")
    })
}

   
//corresponding input 
input.addEventListener("input", function() {
    result.textContent = input.value
    const calculate = document.getElementById("calculate")

    if (input.value === '') {
        calculate.textContent = "Kindly input unit"
    } else {
        calculate.textContent = "Calculations goes in here"
    }
})

const list = document.getElementsByClassName("list")
const meter = document.getElementById("meter")

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        list[i].classList.toggle("darken")
        measureList[0].classList.toggle("show")
        let currentList = list[i].textContent
        meter.textContent = currentList
    })
} 


const lowerList = document.getElementsByClassName("lower--list")
const feet = document.getElementById("feet")
for (let i = 0; i < lowerList.length; i++) {
    lowerList[i].addEventListener('click', function() {
        lowerList[i].classList.toggle("darken")
        measureList[1].classList.toggle("show")
        let currentList2 = lowerList[i].textContent
        feet.textContent = currentList2
    })
} 

