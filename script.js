const details = document.getElementsByClassName("perferred--unit")
const measureList = document.getElementsByClassName("measure--list")
const list = document.getElementsByClassName("list")
const meter = document.getElementById("meter")
const input = document.getElementById("input")


// work in this part of the code in the office, make sure it darkens in accordance with the name of the select unit

for(let i = 0; i < details.length; i++) {
    let listClick = details[i] 
    listClick.addEventListener('click', function() {
    measureList[i].classList.toggle("show")
        let currentDetail = details[i].textContent
        for (let i = 0; i < list.length; i++) {
            let listConstent = list[i].textContent
            if (currentDetail === listConstent) {
                list[i].classList.add("darken")
            } else {
                list[i].classList.remove("darken")
            }
        }
})}



    





// top buttons
const button = document.getElementsByTagName("button")
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        /* button[i].classList.toggle("button-color") */
        if (button[i] === button[0]) {
            button[i].classList.toggle("button-color")
            button[1].classList.remove("button-color")
            button[2].classList.remove("button-color")
        } else if (button[i] === button[1]) {
            button[i].classList.toggle("button-color")
            button[0].classList.remove("button-color")
            button[2].classList.remove("button-color")
        } else {
            button[i].classList.toggle("button-color")
            button[0].classList.remove("button-color")
            button[1].classList.remove("button-color")
        }
    })
}


//corresponding input 
const result = document.getElementById("result")
input.addEventListener("input", function() {
    //conditions for unit calculations
    result.textContent = input.value
    const calculate = document.getElementById("calculate")

    if (input.value === '') {
        calculate.textContent = "Kindly input unit"
    } else {
        calculate.textContent = "Calculations goes in here"
    }
})

//list functionalities


for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        if (list[i] === list[0]) {
            measureList[0].classList.toggle("show")
        } else {
        /* list[i].classList.toggle("darken") */
        measureList[0].classList.toggle("show")
        let currentList = list[i].textContent
        meter.innerHTML = `${currentList} <img src="./img/Vector.png" alt="triangle"/>`
        }
        
    })
} 


const lowerList = document.getElementsByClassName("lower--list")
const feet = document.getElementById("feet")
for (let i = 0; i < lowerList.length; i++) {
    lowerList[i].addEventListener('click', function() {
        if (lowerList[i] === lowerList[0]) {
            measureList[1].classList.toggle("show")
        } else {
        /* lowerList[i].classList.toggle("darken") */
        measureList[1].classList.toggle("show")
        let currentList2 = lowerList[i].textContent
        feet.innerHTML = `${currentList2} <img src="./img/Vector.png" alt="triangle"/>`
        }
    })
} 

