console.log('Calcola il prezzo')

const km = 300 // number
const age = 30 // number
const priceKm = 0.21 // number
console.log(km)
console.log(age)
console.log(priceKm)


// recupero il button
const buttonElement = document.getElementById('calcola')
console.log(buttonElement)

// recupero il form 
const formElement = document.getElementById('form-prezzo')
console.log(formElement)
formElement = addEventListener('submit', function (event) {
    console.log('submit', event)
})

// calcolo prezzo per km
const finalKm = km * priceKm
console.log(finalKm)
