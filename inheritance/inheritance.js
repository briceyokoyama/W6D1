Function.prototype.inherits = function(parentObject) {
  function Surrogate() {};
  Surrogate.prototype = parentObject.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

Function.prototype.inherits2 = function (parentObject) {
  this.prototype = Object.create(parentObject.prototype);
  this.prototype.constructor = this;
}

function MovingObject() {};

MovingObject.prototype.move = function(x, y) {
  console.log("move");
};

function Ship() { };
Ship.inherits2(MovingObject);

function Asteroid() { };
Asteroid.inherits2(MovingObject);