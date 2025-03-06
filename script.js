// Obtener el canvas y su contexto

const canvas = document.getElementById("artCanvas");
const ctx = canvas.getContext("2d");

// Configurar el tamaño del canvas
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.8;

// Funcion para generar un color aleatorio

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Funcion para dibujar un circulo

function drawCircle(x, y) {
    const radius = Math.random() * 50 + 10; // Radio entre 10 y 60
    const color = getRandomColor();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.stroke();
}

//  Funcion para dibujar una linea
function drawLine(x1, y1, x2, y2) {
    const color = getRandomColor();
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.random() * 5 + 1; // Grosor entre 1 y 10
    ctx.stroke();
}

// Evento para dibujar al mover el mouse
canvas.addEventListener("click", (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    // Dibujar un circulo mas grande al hacer clic
    drawCircle(x, y);
});

// Limpiar el canvas cada 5 segundos
setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}, 5000); 
