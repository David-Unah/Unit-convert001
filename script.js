const details = document.getElementsByClassName("perferred--unit")
const measureList = document.getElementsByClassName("measure--list")
const list = document.getElementsByClassName("list")

const meter = document.getElementById("meter")
const input = document.getElementById("input")
const bottomSelect = document.getElementById("bottom--select")


// work in this part of the code in the office, make sure it darkens in accordance with the name of the select unit

for(let i = 0; i < details.length; i++) {
    let listClick = details[i] 
    listClick.addEventListener('click', function() {
    measureList[i].classList.toggle("show")
    for (let i = 0; i < list.length; i++) {
        if (meter.innerText === list[1].textContent) { 
            list[1].classList.add("darken")
            listDarkedSelect(list, [2, 3, 4, 5])
        } else if (meter.innerText === list[2].textContent) {
            list[2].classList.add("darken")
            listDarkedSelect(list, [1, 3, 4, 5])
        }  else if (meter.innerText === list[3].textContent) {
            list[3].classList.add("darken")
            listDarkedSelect(list, [1, 2, 4, 5])
        } else if (meter.innerText === list[4].textContent) {
            list[4].classList.add("darken")
            listDarkedSelect(list, [1, 2, 3, 5])
        } else {
            list[5].classList.add("darken")
            listDarkedSelect(list, [1, 2, 3, 4])
        }
    }
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
    if (bottomSelect.innerText === "Kilometer"){
        conversionToKilometer(1000)
    } else if (bottomSelect.innerText === "Centimeter") {
        conversionToCentimeter(100)
    } else if (bottomSelect.innerText === "Foot") {
        conversionToFeet(3.281, 3)
    } else  if (bottomSelect.innerText === "Yard") {
        conversionToFeet(1.094, 3)
    } if (input.value === '') { 
        calculate.textContent = "Kindly input unit" 
    }
    if (meter.innerText === bottomSelect.innerText) {
        console.log("kindly select a different measurement")
        result.textContent = input.value
        bottomSelect.classList.add("bounce")
        calculate.textContent = "waiting..."
    } 

    
    
})

bottomSelect.addEventListener("click", () => {
    bottomSelect.classList.remove("bounce")
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
        if (list[i] === list[1]) { 
            /* list[1].classList.add("darken")
            listDarkedSelect(list, [2, 3, 4, 5]) */
            input.addEventListener('input', () => {
                if (meter.innerText === bottomSelect.innerText) {
                    console.log("kindly select a different measurement")
                    
                    calculate.textContent = "waiting..."
                } else if (bottomSelect.innerText === "Kilometer"){
                    conversionToKilometer(1000)
                    
                } else if (bottomSelect.innerText === "Centimeter") {
                    conversionToCentimeter(100)
                } else if (bottomSelect.innerText === "foot") {
                    conversionToFeet(3.281, 3)
                } else {
                    conversionToFeet(1.094, 3)
                }
            })
    
        
    } else if (list[i] === list[2]) {
        /* list[2].classList.add("darken")
        listDarkedSelect(list, [1, 3, 4, 5]) */
        input.addEventListener('input', () => {
            if (meter.innerText === bottomSelect.innerText) {
                console.log("kindly select a different measurement")
                
                calculate.textContent = "waiting..."
            } else if (bottomSelect.innerText === "Meter"){
                conversionToCentimeter(1000)  //this is a function to convert kilometer to meter
                
            } else if (bottomSelect.innerText === "Centimeter") {
                conversionToCentimeter(100000)
            } else if (bottomSelect.innerText === "Foot") {
                conversionToFeet(328.1, 3) 
            } else {
                conversionToCentimeter(1094)  //converts km to yard, takes reused this function due to similar setup
            }
        })
        /* conversionToFeet( 3281, 0) */
        
    }  else if (list[i] === list[3]) {
        /* list[3].classList.add("darken")
        listDarkedSelect(list, [1, 2, 4, 5]) */
        input.addEventListener('input', () => {
            if (meter.innerText === bottomSelect.innerText) {
                console.log("kindly select a different measurement")
                
                calculate.textContent = "waiting..."
            } else if (bottomSelect.innerText === "Meter"){
                conversionToKilometer(100) //conversion of cm to m, resuse this function
                
            } else if (bottomSelect.innerText === "Kilometer") {
                conversionToKilometer(100000) //conversion of cm to km, reused this function
            } else if (bottomSelect.innerText === "Foot") {
                convertCenToFoot(30.48, 3)  
            } else {
                convertCenToFoot(91.44, 3)// conversion fo cm to yard, reused this function
            }
        })
        /* conversionToFeet( 30.48, 3) */
        
    } else if (list[i] === list[4]) {
        /* list[4].classList.add("darken")
        listDarkedSelect(list, [1, 2, 3, 5]) */
        input.addEventListener('input', () => {
            if (meter.innerText === bottomSelect.innerText) {
                console.log("kindly select a different measurement")
                
                calculate.textContent = "waiting..."
            } else if (bottomSelect.innerText === "Meter"){
                convertCenToFoot(3.281, 3)  //conversion to Meter: reused function
                
            } else if (bottomSelect.innerText === "Kilometer") {
                convertCenToFoot(3281, 3) // convertion of ft to  km ; reused function
            } else if (bottomSelect.innerText === "Centimeter") {
                conversionToFeet(30.48, 3)
            } else {
                convertCenToFoot(3, 3)
            }
        })
        
    } else {
        /* list[5].classList.add("darken")
        listDarkedSelect(list, [1, 2, 3, 4]) */
        input.addEventListener('input', () => {
            if (meter.innerText === bottomSelect.innerText) {
                console.log("kindly select a different measurement")
                
                calculate.textContent = "waiting..."
            } else if (bottomSelect.innerText === "Meter"){
                convertCenToFoot(1.094, 3) // yard to meter; reused function
                
            } else if (bottomSelect.innerText === "Kilometer") {
                convertCenToFoot(1094, 3) // yard to km ; reused function
            } else if (bottomSelect.innerText === "Centimeter") {
                conversionToFeet(91.44, 3) // yard to cm; reused function
            } else {
                conversionToCentimeter(3)  // yard to ft, reused function
            }
        })
    }
})
} 

function renderToNull() {
    result.textContent = 0
    input.value = ''
}


//list darken function
function listDarkedSelect(listType, arr) {
        input.value = ''
        result.textContent = input.value
        calculate.textContent = 'calculation goes in here'
        let range = arr
        range.forEach(element => {
            listType[element].classList.remove("darken")
        })
}



// lower list
const lowerList = document.getElementsByClassName("lower--list")
for (let i = 0; i < lowerList.length; i++) {
    lowerList[i].addEventListener('click', function() {
        renderToNull()
        if (lowerList[i] === lowerList[0]) {
            measureList[1].classList.toggle("show")
        } else {
        measureList[1].classList.toggle("show")
        let currentList2 = lowerList[i].textContent
        bottomSelect.innerHTML = `${currentList2} <img src="./img/Vector.png" alt="triangle"/>`
        }
        if (bottomSelect.innerText === meter.innerText) {
            console.log("Selected measurements are the same")
        } 
        if (bottomSelect.innerText === lowerList[1].textContent) { 
            lowerList[1].classList.add("darken")
            listDarkedSelect(lowerList, [2, 3, 4, 5])
        } else if (bottomSelect.innerText === lowerList[2].textContent) {
            lowerList[2].classList.add("darken")
            listDarkedSelect(lowerList, [1, 3, 4, 5])
        } else if (bottomSelect.innerText === lowerList[3].textContent) {
            lowerList[3].classList.add("darken")
            listDarkedSelect(lowerList, [1, 2, 4, 5])
        } else if (bottomSelect.innerText === lowerList[4].textContent) {
            lowerList[4].classList.add("darken")
            listDarkedSelect(lowerList, [1, 2, 3, 5])
        } else {
            lowerList[5].classList.add("darken")
            listDarkedSelect(lowerList, [1, 2, 3, 4])
        }
        
    })
} 







//make the calculation function dynamic
function conversionToFeet(num, toFix) {
    const result = document.getElementById("result")
    const calculate = document.getElementById("calculate")
    const meterValue = num
    const convertToFeet = meterValue * input.value
    const meterToFeet = convertToFeet.toFixed(toFix)
    result.textContent = meterToFeet
    calculate.textContent = `${meterValue} x ${input.value} In`
}


function conversionToKilometer(num) {
    const result = document.getElementById("result")
    const calculate = document.getElementById("calculate")
    const meterValue = num
    const convertToKilometer = input.value / meterValue
    result.textContent = convertToKilometer
    calculate.textContent = `${input.value} / ${meterValue} In`
}

function conversionToCentimeter(num) {
    const result = document.getElementById("result")
    const calculate = document.getElementById("calculate")
    const meterValue = num
    const convertToCentimeter = input.value * meterValue
    result.textContent = convertToCentimeter
    calculate.textContent = `${input.value} x ${meterValue} In`
}


//kilometer to meter function


function convertCenToFoot(num, tofix) {
    const result = document.getElementById("result")
    const calculate = document.getElementById("calculate")
    const meterValue = num
    const convertToKilometer = input.value / meterValue
    result.textContent = convertToKilometer.toFixed(tofix)
    calculate.textContent = `${input.value} / ${meterValue} In`
}