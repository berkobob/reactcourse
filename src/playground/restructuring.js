// const person = {
//     // name: 'Antoine',
//     age: 49,
//     location: {
//         city: 'Berko',
//         temp: 15
//     }
// };

// const { name='Anonymous', age} = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature=0} = person.location;
// console.log(`It is ${temperature} in ${city}`);


const address = ['123 street', 'mytown', 'herts', 'UK'];
const [street, city, state, zip] = address;
console.log(`You are in ${state} ${zip}`);