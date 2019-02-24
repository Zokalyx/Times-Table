let time = 0;
let n = 360;
let r = 275;
let looping = true;
let speed = 0.01;

function setup() {
	createCanvas(600,600);
}

function draw() {
	background(255);
	strokeWeight(1);
	translate(width/2,height/2);
	stroke(0);
	for (let val = 0; val < n; val++) {
		let angle = map(val,0,n,0,TWO_PI);
		let newval = (val*time)%n;
		let newangle = map(newval,0,n,0,TWO_PI);
		//point(r*cos(angle),r*sin(angle));
		line(r*cos(angle),r*sin(angle),r*cos(newangle),r*sin(newangle));
	}
	stroke(255,0,0);
	strokeWeight(10);
	point(0,0);
	time += speed;
}

function mouseClicked() {
	if (looping) {
		noLoop();
		looping = false;
	} else {
		loop();
		looping = true;
	}
}