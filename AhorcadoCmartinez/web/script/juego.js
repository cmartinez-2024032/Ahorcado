const palabras = [
    { palabra: "PROGRAMACION", pistas: ["Se usa para crear software", "Requiere lógica", "Lenguajes como Java o Python"] },
    { palabra: "DESARROLLO", pistas: ["Proceso de crear aplicaciones", "Incluye diseño y codificación", "Puede ser web o móvil"] },
    { palabra: "ALGORITMO", pistas: ["Conjunto de pasos para resolver un problema", "Se usa en informática", "Puede ser eficiente o ineficiente"] },
    { palabra: "COMPUTADORA", pistas: ["Dispositivo electrónico", "Procesa datos", "Tiene hardware y software"] }
];

let palabraSecreta = "";
let letrasAdivinadas = [];
let errores = 0;
let intentosRestantes = 7;
let tiempoRestante = 30;
let intervalo;
let juegoPausado = false;

function iniciarJuego() {
    const palabraObj = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabraObj.palabra;
    letrasAdivinadas = [];
    for (let i = 0; i < palabraSecreta.length; i++) {
        letrasAdivinadas.push("_");
    }

    errores = 0;
    intentosRestantes = 7;
    tiempoRestante = 30;
    juegoPausado = false;

    document.getElementById("imagenAhorcado").src = "img/ahorcado0.png";
    document.getElementById("palabra").textContent = letrasAdivinadas.join(" ");
    document.getElementById("pistas").innerHTML = "1. " + palabraObj.pistas[0] + "<br>2. " + palabraObj.pistas[1] + "<br>3. " + palabraObj.pistas[2];
    document.getElementById("mensaje").textContent = "";
    document.getElementById("cronometro").textContent = tiempoRestante;

    document.getElementById("teclado").style.display = "none";

    clearInterval(intervalo);
    intervalo = setInterval(actualizarCronometro, 1000);
}

// Detectar letras del teclado físico
window.addEventListener("keydown", function(event) {
    if (!juegoPausado) {
        let letra = event.key.toUpperCase();
        if (letra.length === 1 && letra >= "A" && letra <= "Z") {
            adivinarLetra(letra);
        }
    }
});

function adivinarLetra(letra) {
    let acerto = false;
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
            letrasAdivinadas[i] = letra;
            acerto = true;
        }
    }

    if (!acerto) {
        errores++;
        intentosRestantes--;
        document.getElementById("imagenAhorcado").src = "img/ahorcado" + errores + ".png";
        if (intentosRestantes <= 0) {
            document.getElementById("mensaje").textContent = "¡Perdiste! La palabra era: " + palabraSecreta + ". Reiniciando...";
            setTimeout(iniciarJuego, 2000);
            return;
        }
    }

    document.getElementById("palabra").textContent = letrasAdivinadas.join(" ");

    let completo = true;
    for (let i = 0; i < letrasAdivinadas.length; i++) {
        if (letrasAdivinadas[i] === "_") {
            completo = false;
        }
    }
    if (completo) {
        document.getElementById("mensaje").textContent = "¡Ganaste!";
        clearInterval(intervalo);
    }
}

function actualizarCronometro() {
    if (juegoPausado) return;
    document.getElementById("cronometro").textContent = tiempoRestante;
    if (tiempoRestante <= 0) {
        clearInterval(intervalo);
        document.getElementById("mensaje").textContent = "¡Tiempo agotado! La palabra era: " + palabraSecreta + ". Reiniciando...";
        setTimeout(iniciarJuego, 2000);
    } else {
        tiempoRestante--;
    }
}

function pausarJuego() {
    juegoPausado = !juegoPausado;
    let boton = document.getElementById("pausa");
    if (juegoPausado) {
        boton.textContent = "Reanudar";
    } else {
        boton.textContent = "Pausa";
    }
}

function reiniciarJuego() {
    clearInterval(intervalo);
    iniciarJuego();
}

window.onload = iniciarJuego;
