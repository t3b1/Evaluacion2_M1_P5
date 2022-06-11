//variables globales
let palabraAleatoria = "";
let time = 10;
let score = 0;

//variable de etiqueta
const input = document.querySelector("#text")

//variable del tiempo
let timeInterval = setInterval(actualizarTiempo, 1000);

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

// Inicia el juego con una palabra aleatoria
addToDOM(words);

// Función para retornar una palabra aleatoria en un arreglo
function randomWords(aleatorio) {
    palabraAleatoria = aleatorio[Math.floor(Math.random() * aleatorio.length)];
    return palabraAleatoria;
}

// Función para añadir una palabra aleatoria al h1
function addToDOM(word) {
    const etiq_h1 = document.querySelector("#randomWord");
    etiq_h1.textContent = randomWords(word);
}

// Función para actualizar el tiempo
function actualizarTiempo() {
    document.getElementById('timeSpan').innerHTML = time + 's';
    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    } else {
        time -= 1;
        setTimeout(timeInterval);
    }
}

// Función para actualizar el puntaje
function updateScore() {
    score++; //Sumamos 1 y lo agregamos a la etiqueta id score
    let etiq_score = document.querySelector("#score");
    etiq_score.textContent = score;
}

// Función para terminar el juego
function gameOver() {
    // Se crean los elementos y su contenido
    let etiq_game_over = document.querySelector("#end-game-container");
    let etiq_h1 = document.createElement("h1");
    etiq_h1.textContent = "Se acabo el tiempo";
    let etiq_p = document.createElement("p");
    etiq_p.textContent = `Tu puntuación final fue de: ${score} punto(s)`;
    let etiq_btn = document.createElement("button");
    etiq_btn.setAttribute('onclick', 'location.reload()');
    etiq_btn.textContent = "Volver a jugar";
    // removemos la clase .main
    document.querySelector(".main").remove();
    // Agregamos como hijos las etiquetas correspondientes
    etiq_game_over.appendChild(etiq_h1)
    etiq_game_over.appendChild(etiq_p);
    etiq_game_over.appendChild(etiq_btn);
}

// Evento que comprueba si se presiono la tecla enter dentro del input de texto
input.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        if (input.value.toLowerCase() == palabraAleatoria) { //Convertimos el input a minusculas y comparamos con la palabra aletaoria
            time += 3;
            document.getElementById("text").value = "";
            addToDOM(words);
            updateScore();
        } else {
            document.getElementById("text").value = "";
            addToDOM(words);
        }
    }
});


