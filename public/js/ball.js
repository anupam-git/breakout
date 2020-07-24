'use strict';

Ball.inherits(Circle);
function Ball() {
	Circle.apply(this, [floor(width/2), floor(height/2), 20]);

	this.angle = -90;
	this.r = 8;
	this.color = "#26cf31";

	this.render = function() {
		push();

		noStroke();
		fill(this.color);
		ellipse(this.pos.x, this.pos.y, this.diameter);

		pop();
	}

	this.update = function() {
		var x = this.r * sin(this.angle*PI/180 + 90*PI/180),
				y = this.r * cos(this.angle*PI/180 + 90*PI/180);

		this.pos.x = this.pos.x + x;
		this.pos.y = this.pos.y + y;
	}

	this.handleBarCollision = function(bar) {
		var ball = this;

		if (collides(bar, ball)) {
			var collisionPoint = ball.pos.x - bar.pos.x;

			if (collisionPoint <= bar.width/2) {
				if (bar instanceof Player1Bar) {
					ball.angle = map(collisionPoint, 0, bar.width/2, 160, 90);
				} else {
					ball.angle = map(collisionPoint, 0, bar.width/2, 200, 250);
				}
			} else {
				if (bar instanceof Player1Bar) {
					ball.angle = map(collisionPoint, bar.width/2, bar.width, 90, 20);
				} else {
					ball.angle = map(collisionPoint, bar.width/2, bar.width, 290, 350);
				}
			}
		}
	}

	this.handleWallCollision = function() {
		var ball = this;

		if (collides(ball, globals.SCREEN_LEFT_EDGE)) {
			ball.angle = 180 - ball.angle;
		} else if (collides(ball, globals.SCREEN_RIGHT_EDGE)) {
			ball.angle = 180 - ball.angle;
		} else if (collides(ball, globals.SCREEN_TOP_EDGE)) {
			globals.myPoints++;
			return true;

		} else if (collides(ball, globals.SCREEN_BOTTOM_EDGE)) {
			globals.opponentPoints++;

			return true;
		}

		return false;
	}
}
