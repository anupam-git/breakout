'use strict';

var myBar,
		opponentBar,
		ball;

function preload() {
	globalInit();
	// collideDebug(true);
}

function setup() {
	var canvas = createCanvas(globals.GAME_CANVAS_WIDTH, globals.GAME_CANVAS_HEIGHT);
	canvas.mousePressed(canvasMousePressedListener);

	myBar = new Player1Bar();
	opponentBar = new Player2Bar();

	ball = new Ball();
	ball.render();
	globals.pause = true;
}

function draw() {
	background(51);
	UI();
	divider();
	score();
	keyDownHandler();

	ball.render();
	ball.handleBarCollision(myBar);
	ball.handleBarCollision(opponentBar);

	myBar.render();
	opponentBar.render();

	if (!globals.pause) {
		if (ball.handleWallCollision()) {
			ball = null;
		}

		if (ball) {
			ball.update();
		}	else {
			ball = new Ball();
			globals.pause = true;
		}
	}
}

function canvasMousePressedListener() {
	globals.pause = false;
}

function keyPressed() {
	if (key === " ") {
		globals.pause = false;
	}
}

function mouseMoved() {
	// myBar.updateX(mouseX - floor(myBar.width / 2));
}

function keyDownHandler() {
	if (keyIsDown(LEFT_ARROW)) {
		//myBar Left
		myBar.updateX(myBar.pos.x - 5)
	} else if (keyIsDown(RIGHT_ARROW)) {
		//myBar right
		myBar.updateX(myBar.pos.x +	 5)
	} else if (keyIsDown(65)) {
		//opponentBar Left
		opponentBar.updateX(opponentBar.pos.x - 5)
	} else if (keyIsDown(68)) {
		//opponentBar Right
		opponentBar.updateX(opponentBar.pos.x + 5)
	}
}

function divider() {
	var dividerHeight = 5;

	push();

	fill(255, 255, 255, 100);
	noStroke();
	rect(0, globals.GAME_CANVAS_HEIGHT/2 - dividerHeight/2, globals.GAME_CANVAS_WIDTH, dividerHeight);

	pop();
}

function score() {
	push();

	textAlign(CENTER, CENTER);
	fill(255,255,255,30);
	textSize(150);
	text(globals.myPoints, 0, globals.GAME_CANVAS_HEIGHT/2, globals.GAME_CANVAS_WIDTH+30, globals.GAME_CANVAS_HEIGHT/2)

	textAlign(CENTER, CENTER);
	fill(255,255,255,30);
	textSize(150);
	text(globals.opponentPoints, 0, 0, globals.GAME_CANVAS_WIDTH+30, globals.GAME_CANVAS_HEIGHT/2)

	pop();
}

function UI() {
}
