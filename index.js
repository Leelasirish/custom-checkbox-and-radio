//// Currying

function multiply(x, y) {
	return x * y;
}


var multiplyBy2 = multiply.bind(null, 2);

console.log(multiplyBy2(4));
console.log(multiplyBy2(10));

var multiplyBy4 = multiply.bind(null, 4);

console.log(multiplyBy4(4));
console.log(multiplyBy4(10));


//// Chaining


function Shape() {

}

Shape.prototype.rotate = function(angle) {
	console.log('Rotated by '+angle);
	return this;
}

Shape.prototype.skew = function(value) {
	console.log('Skewed by '+value);
	return this;
}

Shape.prototype.grow = function(value) {
	console.log('grew by '+value);
	return this;
}

Shape.prototype.shrink = function(value) {
	console.log('Shrunk by '+value);
	return this;
}

var s = new Shape();
console.log(s.rotate(45).grow(10).shrink(5).grow(20).rotate(90).skew(4));