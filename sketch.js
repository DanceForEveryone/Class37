var database;
var gameState=0;
var playerCount;
var form,player,game;
var allPlayers;
var distance=0
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game();
  //get the gamestate from the database
  game.getState();
  
  //if gameState = 0 call game.start
  game.start();
}

function draw(){
  background("white");
  if(playerCount===4){
  game.update(1);
  }
  if(gameState===1){
  game.play();
  }
    drawSprites();
  
}

