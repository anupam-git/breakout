'use strict';

function Line(x1, y1, x2, y2) {
	this.start = createVector(x1 || 0, y1 || 0);
	this.end = createVector(x2 || 0, y2 || 0);
}

function Circle(x, y, diameter) {
	this.pos = createVector(x, y);
	this.diameter = diameter;
}

function Rectangle(x, y, width, height) {
	this.pos = createVector(x, y);
	this.width = width;
	this.height = height;
}
