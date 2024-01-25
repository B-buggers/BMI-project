let radioBtn1 = document.querySelector('#radio1')
let radioBtn2 = document.querySelector('#radio2')
let ageButton = document.querySelector('#age-button input')
let heightButton = document.querySelector('#height-button input')
let weightButton = document.querySelector('#weight-button input')
let calculateBtn = document.querySelector('.calculate-btn')
let error = document.querySelector('#error')
let modal = document.querySelector('#modal')

calculateBtn.addEventListener('click', calculate)

function calculate() {
    if (inputChecking() == true) {
        showResultBmi()
    } else {
        errorMSG()
    }
}

function getValuesForm() {
    return {
        age: ageButton.value,
        height: heightButton.value,
        weight: weightButton.value
    }
}

function inputChecking() {
    let values = getValuesForm()
    let info = true
    if (values.age == '' || values.age >= 150) {
        info = false
    } else if (values.weight == '' || values.weight <= 0 || values.weight >= 200) {
        info = false
    } else if (values.height == '' || values.height <= 30 || values.height >= 250) {
        info = false
    }
    return info
}

function errorMSG() {
    error.style.display = 'block'

    setTimeout(() => {
        error.style.display = 'none'
    }, 3000);
}

function calculateBMI() {
    let values = getValuesForm()

    let weight = values.weight
    let height = values.height

    return (weight / (height * height)).toFixed(4).slice(4)
}

function showResultBmi() {
    modal.style.display = 'flex'
    modal.innerHTML += calculateBMI()
}