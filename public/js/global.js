'use strict';

Function.prototype.inherits = function(parent) {
  this.prototype = Object.create(parent.prototype);
}

var globals;

function globalInit() {
	var gameWidth = 512,
			gameHeight = 450;

	globals = {
		GAME_CANVAS_WIDTH : gameWidth,
		GAME_CANVAS_HEIGHT : gameHeight,
		SCREEN_BOTTOM_EDGE : new Line(0, gameHeight, gameWidth, gameHeight),
		SCREEN_LEFT_EDGE : new Line(0, gameHeight, 0, 0),
		SCREEN_RIGHT_EDGE : new Line(gameWidth, 0, gameWidth, gameHeight),
		SCREEN_TOP_EDGE : new Line(0, 0, gameWidth, 0),
		myPoints : 0,
		opponentPoints : 0,
		pause : false
	};
}

function collides(x, y) {
	if (x instanceof Circle && y instanceof Rectangle) {
		return collideRectCircle(y.pos.x, y.pos.y, y.width, y.height, x.pos.x, x.pos.y, x.diameter)
	} else if (x instanceof Rectangle && y instanceof Circle) {
		return collideRectCircle(x.pos.x, x.pos.y, x.width, x.height, y.pos.x, y.pos.y, y.diameter)
	} else if (x instanceof Line && y instanceof Circle) {
		return collideLineCircle(x.start.x, x.start.y, x.end.x, x.end.y, y.pos.x, y.pos.y, y.diameter);
	} else if (x instanceof Circle && y instanceof Line) {
		return collideLineCircle(y.start.x, y.start.y, y.end.x, y.end.y, x.pos.x, x.pos.y, x.diameter);
	}
}
