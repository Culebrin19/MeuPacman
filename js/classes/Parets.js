let img;
let pacman;
const WIDTH_CANVAS = 448;
const HEIGHT_CANVAS = 448;
const pixels = 32;
const limitTop = pixels;
const limitBot = HEIGHT_CANVAS - pixels;
const limitLeft = pixels;
const limitRight = WIDTH_CANVAS - pixels;
const coordYCercle = 64;
const coordXCercle = 64;

class Parets {
  constructor(image, canvasWidth, canvasHeight, tileSize) {
    this.image = image;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.tileSize = tileSize;
  }


  draw() {
    for (let x = 0; x < WIDTH_CANVAS; x = x + pixels) {
      image(img, x, 0);
      image(img, x, HEIGHT_CANVAS - pixels);
    }

    for (let y = 0; y < HEIGHT_CANVAS; y = y + pixels) {
      image(img, 0, y);
      image(img, WIDTH_CANVAS - pixels, y);
    }
  }
  }

  function preload(){
    img=loadImage('media/img/roca.png');
    pacman=loadImage('media/img/pacRight.png');
  }

  function setup() {
    createCanvas(WIDTH_CANVAS, HEIGHT_CANVAS);
  }

  function draw() {

    background(220);


    for (let x = 0; x < WIDTH_CANVAS; x = x + pixels){
      image(img,x,0);
      image(img,x,HEIGHT_CANVAS - pixels);
    }

    for (let y = 0; y < HEIGHT_CANVAS; y = y + pixels){
      image(img,0,y);
      image(img,WIDTH_CANVAS - pixels, y);
    }

    image(pacman,coordXCercle,coordYCercle);
  }
}
