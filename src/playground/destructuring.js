// Object Destructuring

// const person = {
//     name: 'Andrew',
//     age: 30,
//     location: {
//         city: 'Cartagena',
//         temp: 92
//     }
// }

// const { name, age, location } = person;
// const {city, temp} = person.location
// console.log(`${name} is ${age}. ${city} is ${temp} degrees.`)

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }


// const { title, author} = book
// const {name: publisherName = 'Self Published'} = book.publisher

// console.log(publisherName) // Penquin, Self published


//Array destructuring


const address = [ '1299 S Juniper Street', 'Elmhurst', , '60126'];

const [street, city, state = 'New york', zip ] = address

console.log(`I live on ${street}. In ${state}`)

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75']

// 1st and thirst string it
const [coffee,,medium] = item;

console.log(`A medium ${coffee} costs: ${medium}`)