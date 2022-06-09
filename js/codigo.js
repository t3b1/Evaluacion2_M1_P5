let palabraAleatoria = "";
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

addToDOM(words);

function randomWords(aleatorio) {
    palabraAleatoria = aleatorio[Math.floor(Math.random() * aleatorio.length)];
    return palabraAleatoria;
}

function addToDOM(w){
    const etiq_h1 = document.querySelector("#randomWord");
    etiq_h1.textContent = randomWords(w);
}

