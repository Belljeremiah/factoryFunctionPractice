// These three objects are the provied info from the Kneel Diamonds factory function practice

const metals = [
    { metal: "Sterling Silver", price: 12.42 },
    { metal: "14K Gold", price: 736.4 },
    { metal: "24K Gold", price: 1258.9 },
    { metal: "Platinum", price: 795.45 },
    { metal: "Palladium", price: 1241.0 }
]

const diamonds = [
    { carets: 0.5, price: 405 },
    { carets: 0.75, price: 782 },
    { carets: 1, price: 1470 },
    { carets: 1.5, price: 1997 },
    { carets: 2, price: 3638 }
]

const ringStyles = [
    { style: "Classic", price: 500 },
    { style: "Modern", price: 710 },
    { style: "Vintage", price: 965 }
]

// THis is the provided factory function example

const createCustomRing = (style, carets, metal) => {
    return {
        style: style.style,
        carets: carets.carets,
        metal: metal.metal,
        price: metal.price + style.price + carets.price
    }
}

//  DOn't know what this is but... here it is
const newRingOrder = createCustomRing(ringStyles[1], diamonds[2], metals[2])

// Practice: Doctors Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

const name = [
    { name: "Doctor Bud" },
    { name: "Dotor Bob " },
    { name: "Doctor Turner" },
    { name: "Doctor Welch" },
    { name: "Doctor Mooch" }
]

const specialty = [
    { specialty: "Proctologist" },
    { specialty: "Oncologist"},
    { specialty: "Pediatrician" },
    { specialty: "Ornothologist" },
    { specialty: "General Practical Joker" }
]

const address = [
    { address: "Classic", },
    { address: "Modern", },
    { address: "Vintage", }
]




// My pitiful ass factory function

const doctorFactoryFunction = (name, specialty, address) => {
    return {
        name:
        specialty:
        address:
    }
}