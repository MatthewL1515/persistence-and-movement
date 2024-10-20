// Assigning Variables
let r
let g
let b
let size


function setup() {
  createCanvas(600, 600);
  r = random(255)
  g = random(255)
  b = random(255)
  size = 0
}

function draw() {
  background(r,g,b);
  
  fill('white')
  stroke('white')
  size = size + 1
  circle(50,50,75+size)
  circle(25,150,90+size)
  circle(75,200,85+size)
  circle(25,225,60+size)
  circle(75,300,75+size)
  circle(50,350,100+size)
  rect(0,350,100,300)
  circle(100,400,100+size)
  circle(125,490,100+size)
  circle(120,570,100+size)
  circle(150,570,100+size)
  circle(575,300,70+size)
  rect(540,300,70,300)
  circle(550,340,89+size)
  circle(550,400,100+size)
  circle(525,450,75+size)
  circle(500,500,100+size)
  circle(520,570,90+size)
  
  
  beginShape();
  fill('red')
  stroke('red')
  circle(300,300,150)
  rect(225,300,150,200)
  rect(325,400,50,200)
  rect(225,400,50,200)
  
  fill('black')
  stroke('black')
  circle(300,290,90)
  rect(225,340,150,10)
  rect(250,375,10,75)
  rect(340,375,10,75)
  rect(250,400,100,20)
  rect(225,490,150,10)
  
  fill('blue')
  stroke('blue')
  rect(325,550,50,20)
  rect(225,550,50,20)
  endShape();
}