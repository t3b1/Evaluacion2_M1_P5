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


function randomWords(aleatorio) {

    resul = aleatorio[Math.floor(Math.random() * aleatorio.length)];

    return resul;
}

console.log(randomWords(words))