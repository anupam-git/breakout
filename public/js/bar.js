'use strict';

Bar.inherits(Rectangle);
function Bar(initX, initY, barWidth, barHeight, barMargin, color) {
	Rectangle.apply(this, [initX, initY, barWidth, barHeight]);

	this.color = color;

	this.render = function() {
		push();

		noStroke();
		fill(this.color);
		rect(this.pos.x, this.pos.y, this.width, this.height);

		pop();
	}

	this.updateX = function(x) {//print(isAtFirst(this), isAtLast(this))
		if (isAtFirst(this, x)) {
			this.pos.x = initX;
		}	else if (isAtLast(this, x)) {
			var lastX = initX + width - this.width - barMargin*2;

			this.pos.x = lastX;
		} else {
			this.pos.x = x;
		}
	}

	function isAtFirst(_this, x) {
		if (x <= initX) {
			return true;
		}
		else {
			return false;
		}
	}

	function isAtLast(_this, x) {
		var lastX = initX + width - _this.width - barMargin*2;

		if (x >= lastX) {
			return true;
		}
		else {
			return false;
		}
	}
}

Player1Bar.inherits(Bar);
function Player1Bar() {
	var barWidth = 150,
			barHeight = 10,
			barMargin = 10,
			color = "#f44336",
			initX = barMargin,
			initY = height - barHeight - barMargin;

	Bar.apply(this, [initX, initY, barWidth, barHeight, barMargin, color]);
}

Player2Bar.inherits(Bar);
function Player2Bar() {
	var barWidth = 150,
			barHeight = 10,
			barMargin = 10,
			color = "#2196f3",
			initX = barMargin,
			initY = barHeight;

	Bar.apply(this, [initX, initY, barWidth, barHeight, barMargin, color]);
}
