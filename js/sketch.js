/* eslint-env browser */

// Función para configurar el canvas
function setup() {
  // Crear un canvas de 600x400 píxeles y asignarlo al contenedor con ID "sketch-holder"
  createCanvas(600, 400).parent("#sketch-holder");
}

// Función para dibujar el contenido en el canvas
function draw() {
  // Fondo azul cielo
  background(135, 206, 235);

  // Configuración del círculo
  fill("yellow"); // Color de relleno amarillo
  stroke("orange"); // Color del borde anaranjado
  strokeWeight(20); // Grosor del borde
  circle(550, 50, 100); // Dibujar un círculo (x: 550, y: 50, diámetro: 100)
}

// Exportar las funciones a nivel global (necesario en entornos modernos)
globalThis.setup = setup;
globalThis.draw = draw;
