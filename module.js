// const amount = 9;

// if (amount < 10){
//     console.log("small number")
// }else{
//     console.log("large number")
// }

// console.log(`Hey it's my first node app`) 

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// const secret = 'SUPER SECRET'
// const john = 'john'
// const peter = 'peter'

// const SayHi = (name) =>{
//     console.log(`Hello there ${name}`)
// }
const name = require('./app1');
const SayHi = require('./app2');
const data = require('./alter-flavour');
require('./mind-number');
//console.log(name);

console.log(data)

SayHi("susan")
SayHi(name.john)
SayHi(name.peter)
