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
})}


// top buttons
const button = document.getElementsByTagName("button")
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        if (button[i] === button[0]) {
            buttonColor(1, 2)
        } else if (button[i] === button[1]) {
            buttonColor(0, 2)
        } else {
            buttonColor(0, 1)
        }
    })
}

//button color light control when clicked
function buttonColor(a, b) {
    for (let i = 0; i < button.length; i++) {
    button[i].classList.add("button-color")
    button[a].classList.remove("button-color")
    button[b].classList.remove("button-color")
    }
}    



//corresponding input 
const result = document.getElementById("result")
input.addEventListener("input", function() {
    //conditions for unit calculations
    const calculate = document.getElementById("calculate")
    const meterValue = 3.281
    const inputValue = input.value
    const convertToFeet = meterValue * inputValue
    const meterToFeet = convertToFeet.toFixed(3)
    console.log(typeof inputValue)
    result.textContent = meterToFeet
    calculate.textContent = `${meterValue} x ${input.value} In`
    if (input.value === '') {
        calculate.textContent = "Kindly input unit"
    }
})

//list functionalities


for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        if (list[i] === list[0]) {
            measureList[0].classList.toggle("show")
        } else {
        measureList[0].classList.toggle("show")
        let currentList = list[i].textContent   
        meter.innerHTML = `${currentList} <img src="./img/Vector.png" alt="triangle"/>`
        }
    if (meter.innerText === list[1].textContent) { 
        list[i].classList.add("darken")
        listDarkedSelect([2, 3, 4, 5])
        conversion( 3.281, 3)
        
        
    } else if (meter.innerText === list[2].textContent) {
        list[i].classList.add("darken")
        listDarkedSelect([1, 3, 4, 5])
        conversion( 3281, 0)
        
    }  else if (meter.innerText === list[3].textContent) {
        list[i].classList.add("darken")
        listDarkedSelect([1, 2, 4, 5])
        conversion( 30.48, 3)
        
    } else if (meter.innerText === list[4].textContent) {
        list[i].classList.add("darken")
        listDarkedSelect([1, 2, 3, 5])
        
    } else {
        list[i].classList.add("darken")
        listDarkedSelect([1, 2, 3, 4])
        conversion( 3, 0)
    }
})
} 

//list darken function
function listDarkedSelect(arr) {
        input.value = 0
        result.textContent = input.value
        calculate.textContent = 'calculation goes in here'
        let range = arr
        range.forEach(element => {
            list[element].classList.remove("darken")
        })
}


// lower list
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

//make the calculation function dynamic
function conversion(num, toFix) {
input.addEventListener("input", () => {
            const result = document.getElementById("result")
            const calculate = document.getElementById("calculate")
            const meterValue = num
            const convertToFeet = meterValue * input.value
            const meterToFeet = convertToFeet.toFixed(toFix)
            result.textContent = meterToFeet
            calculate.textContent = `${meterValue} x ${input.value} In`
        })
}
