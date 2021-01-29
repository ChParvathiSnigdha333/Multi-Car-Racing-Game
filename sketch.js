var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1,car1Img, car2,car2Img, car3,car3Img, car4,car4Img;
var trackImg, groundImg, endLineImg;
/*absolute path
track = loadImage("C:/Documents/images/track.jpg");


relative path*/

function preload(){
  car1Img = loadImage("images/car1.png")
  car2Img = loadImage("images/car2.png")
  car3Img = loadImage("images/car3.png")
  car4Img = loadImage("images/car4.png")

  trackImg = loadImage("images/track.png")
  groundImg = loadImage("images/ground.png")
  //endLineImg = loadImage("images/endIine.png")
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (gameState === 2){
    game.end();
    text("congratulations",0,displayHeight*4)
    //image(endLineImg,200,200,displayWidth,displayHeight*5)
  }
}
