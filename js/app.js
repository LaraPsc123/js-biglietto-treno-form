console.log('Calcola il prezzo')

let km = 300 // number
let age = 30 // number
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
let finalKm = km * priceKm // number
console.log(finalKm)

// sconto del 20%
let discount = finalKm * 0.2 // number
let discPrice = finalKm - discount // number

// SE è minorenne
if (age < 18) {
    console.log(discPrice)
}// ALTRIMENTI SE è over 65
else if (age > 65) {
    console.log(disc40)
}

// sconto del 40%
let discount1 = finalKm * 0.4
let disc40 = finalKm - discount1




