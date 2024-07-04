console.log('Calcola il prezzo')

// recupero l'input km dal form
const inputKmElement = document.getElementById('km')
// recupero l'età dal form
const inputEtàElement = document.getElementById('età')

const priceKm = 0.21 // number
//console.log(inputKmElement)
//console.log(inputEtàElement)
//console.log("prezzo al km", priceKm)


// recupero il button
const buttonElement = document.getElementById('calcola') // string
//console.log(buttonElement)


// recupero il form 
let formElement = document.getElementById('form-prezzo') // string
console.log("form dal documento", formElement)
formElement.addEventListener('submit', function (event) {
    // calcolo prezzo per km
    let finalKm = km * priceKm // number
    //console.log("prezzo finale", finalKm)

    // sconto del 20%
    let discount = finalKm * 0.2 // number
    let discPrice = finalKm - discount // number

    // sconto del 40%
    let discount1 = finalKm * 0.4
    let disc40 = finalKm - discount1

    // input dal form con value
    const km = parseFloat(inputKmElement.value) // number
    const age = parseFloat(inputEtàElement.value) // number
    // impedire l'invio del form
    event.preventDefault()
    //console.log("invio del submit", 'submit', event)

    // SE è minorenne
    if (age < 18) {
        console.log("se è minorenne", discPrice)
    }// ALTRIMENTI SE è over 65
    else if (age > 65) {
        //console.log("se è over 65", disc40)
    }
})








