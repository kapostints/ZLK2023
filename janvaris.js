//Fork basic sjadder structure from https://openprocessing.org/sketch/923286
//p5.js shader basic structure ref from https://www.openprocessing.org/sketch/920144
//Learn tutorial from https://www.youtube.com/watch?v=EO2ax570wKo&list=PL4neAtv21WOmIrTrkNO3xCyrxg4LKkrF7&index=24

let theShader;

function preload(){
	theShader = new p5.Shader(this.renderer,vert,frag)
}

function setup() {
	var sizeMin = min(innerHeight, innerWidth)
	createCanvas(windowWidth, windowHeight, WEBGL);
	noStroke()
	background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	shader(theShader)
	theShader.setUniform('u_resolution',[width,height])
	theShader.setUniform('u_time',millis()*0.001)
	
	rect(-width/2,-height/2,width,height)
	ellipse(mouseX, mouseY, 20, 20);
}