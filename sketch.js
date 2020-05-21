class Paddle {
  
  constructor(){
    this.width = 10;
    this.height = 70;
    this.xPosition = 0;
    this.yPosition= 0;
  }
  
  
  display(){
    rect(this.xPosition, this.yPosition, this.width, this.height);
  }}
  class Ball{
  }
  
  
  function setup(){
  createCanvas(400,400);
}


function draw() {
  //set background to white
  background("green");
  
  //player Paddle
  var playerPaddle = new Paddle();
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  
  playerPaddle.display();
  
  //Computer Paddle
  var Comppaddle = new Paddle();
  Comppaddle.yPosition = 200
  Comppaddle.display()
  
  
  //draw the ball
  rect(200,200,10,10);
}