console.log('Calcola il prezzo')

const km = 300 // number
const age = 30 // number
const priceKm = 0.21 // number
console.log(km)
console.log(age)
console.log(priceKm)


// recupero il button
const buttonElement = document.getElementById('calcola') // string
console.log(buttonElement)

// recupero il form 
let formElement = document.getElementById('form-prezzo') // string
console.log(formElement)
formElement.addEventListener('submit', function (event) {
    // impedire l'invio del form
    event.preventDefault()
    console.log('submit', event)
})



// calcolo prezzo per km
const finalKm = km * priceKm // number
console.log(finalKm)

// sconto del 20%
let discount = finalKm * 0.2 // number
let discPrice = finalKm - discount // number

// SE è minorenne
if (finalKm < 18) {
    console.log(discPrice)
}

// sconto del 40%
let discount40 = finalKm * 0.4 // number
let disc40 = finalKm - discount40
// ALTRIMENTI SE è OVER 65
if (finalKm > 65) {
    console.log(disc40)
}

