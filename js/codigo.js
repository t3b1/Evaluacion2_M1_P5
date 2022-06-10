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

addToDOM(words);

function randomWords(aleatorio) {
    palabraAleatoria = aleatorio[Math.floor(Math.random() * aleatorio.length)];
    return palabraAleatoria;
}

function addToDOM(word) {
    const etiq_h1 = document.querySelector("#randomWord");
    etiq_h1.textContent = randomWords(word);
}


input.addEventListener("keyup", function(e) {
        if (e.keyCode == 13) {
            if (input.value == palabraAleatoria) {
                time += 3
                document.getElementById("text").value = "";
            }else{
                document.getElementById("text").value = "";
            }

            addToDOM(words)
        }
    }
)
 function actualizarTiempo(){
    document.getElementById('timeSpan').innerHTML = time +'s';

        if (time === 0) {
            clearInterval(timeInterval);
        
        }else{
            time-=1;
            setTimeout(timeInterval);
        }
   

 }