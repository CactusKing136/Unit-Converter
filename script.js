const convertBtn = document.querySelector(".convert-btn")
const inputEl = document.querySelector(".num-input")
const lengthEl = document.querySelector(".length-output")
const volumeEl = document.querySelector(".volume-output")
const massEl = document.querySelector(".mass-output")
const bodyEl = document.querySelector("body")
const convertLength = 3.281
const convertVolume = 0.246
const convertMass = 2.204
let lengthMeters = 0
let lengthFeet = 0
let volumeLiters = 0
let volumeGallons = 0
let massKilograms = 0
let massPounds = 0

convertBtn.addEventListener("click", () => {
    calculate()

    inputEl.value = ""
})

bodyEl.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {
        calculate()

        inputEl.value = ""
    }
    
})

const calculate = () => {
    lengthFeet = Math.floor((inputEl.value * convertLength) * 1000) / 1000
    lengthMeters = Math.floor((inputEl.value / convertLength) * 1000) / 1000
    lengthEl.textContent = `${inputEl.value} meters = ${lengthFeet} feet | ${inputEl.value} feet = ${lengthMeters} meters`

    volumeGallons = Math.floor((inputEl.value * convertVolume) * 1000) / 1000
    volumeLiters = Math.floor((inputEl.value / convertVolume) * 1000) / 1000
    volumeEl.textContent = `${inputEl.value} liters = ${volumeGallons} gallons | ${inputEl.value} gallons = ${volumeLiters} liters`

    massPounds = Math.floor((inputEl.value * convertLength) * 1000) / 1000
    massKilograms = Math.floor((inputEl.value / convertLength) * 1000) / 1000
    massEl.textContent = `${inputEl.value} kilograms = ${massPounds} pounds | ${inputEl.value} pounds = ${massKilograms} kilograms`
}