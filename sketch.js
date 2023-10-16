let blue = "#a2c8cd";
let fishImg;
function preload() {
  fishImg = loadImage("./assets/wfish1.png")
}
function setup() {
	angleMode(DEGREES);
  createCanvas(1200,900);
}
function draw() {
  background("#fefefe");
	
	stroke("#00000055");
	for(let i =0;i<height;i=i+40) {
		let phase = abs(random(0,20)*10);
		wave(i,phase);
	}
	// wave(height/2+20,60-frameCount);
	for(let j = 0; j<height; j+=180) {
		for(let i = 0; i<width; i+=180) {
      push()
      translate(width+(i-2*frameCount)%width, j);
      scale(-1,1);
      rotate(10*noise(0.2*frameCount+(j*100+i*100)));
			image(fishImg,100,0, 120,80);
      pop()
      push()
      translate((i+90+2*frameCount)%width, j+90);
      rotate(10*noise(0.2*frameCount+(j*100+i*100)+1000));
			image(fishImg,-100,30, 120,80);
      pop()
			
		}
	}
}
function wave(y,phase) {
	for(let i = 0;i<width;i+=0.5) {
		point(i, y+2*sin(3*i +phase),2,2);
	}
}