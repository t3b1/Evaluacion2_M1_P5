const palabraAleatoria = 10;
const time = 10;
const score = 0;

const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];


function randomWords(palabraaleatoria) {

     resul =  Math.random(palabraaleatoria.length);
    
    return resul;
}

console.log(randomWords(words))
