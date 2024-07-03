console.log('Calcola il prezzo')

let km = 300 // number
let age = 30 // number
const priceKm = 0.21 // number
console.log(km)
console.log(age)
console.log("prezzo al km", priceKm)


// recupero il button
const buttonElement = document.getElementById('calcola') // string
console.log(buttonElement)

// recupero il form 
let formElement = document.getElementById('form-prezzo') // string
console.log("form dal documento", formElement)
formElement.addEventListener('submit', function (event) {
    // impedire l'invio del form
    event.preventDefault()
    console.log("invio del submit", 'submit', event)
})



// calcolo prezzo per km
let finalKm = km * priceKm // number
console.log("prezzo finale", finalKm)

// sconto del 20%
let discount = finalKm * 0.2 // number
let discPrice = finalKm - discount // number

// SE è minorenne
if (age < 18) {
    console.log("se è minorenne", discPrice)
}// ALTRIMENTI SE è over 65
else if (age > 65) {
    console.log("se è over 65", disc40)
}

// sconto del 40%
let discount1 = finalKm * 0.4
let disc40 = finalKm - discount1




