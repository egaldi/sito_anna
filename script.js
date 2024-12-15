// Simulazione di credenziali
const validUsername = "anna";
const validPassword = "Ape2024";

// Funzione di login
function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === validUsername.toLowerCase() && password === validPassword) {
        window.location.href = "static.html";
    } else {
        errorMessage.textContent = "Credenziali non valide. Riprova.";
    }
}

// Testo che cambia periodicamente
const texts = [
    "Buon Natale",
    "Non ce la faccio più",
    "Momenti felici vissuti insieme",
    "Vorrei una pizzetta",
    "GRAZIE DI TUTTO!!"
];
let textIndex = 0;

function changeText() {
    const dynamicText = document.getElementById("randomText");
    dynamicText.textContent = texts[textIndex];
    textIndex = (textIndex + 1) % texts.length;
}

// Cambia il testo ogni 3 secondi
if (window.location.pathname.includes("static.html")) {
    setInterval(changeText, 3000);
}

function togglePassword() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function positionRandomText() {
    const randomText = document.getElementById("randomText");
    randomText.textContent = texts[textIndex];
    textIndex = (textIndex + 1) % texts.length;
    // Ottieni le dimensioni dello schermo
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Calcola una posizione casuale per il testo
    const randomX = Math.floor(Math.random() * (screenWidth - randomText.offsetWidth));
    const randomY = Math.floor(Math.random() * (screenHeight - randomText.offsetHeight));

    // Imposta la posizione del testo
    randomText.style.left = `${randomX}px`;
    randomText.style.top = `${randomY}px`;
}
// Cambia posizione del testo ogni 2 secondi
setInterval(positionRandomText, 2000);

// Posiziona il testo la prima volta al caricamento della pagina
window.onload = positionRandomText;

