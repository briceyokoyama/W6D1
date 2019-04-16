// without rest operator
function sum() {
  let args = Array.from(arguments);
  let sum = 0;
  
  args.forEach(num => {
    sum += num;
  })
  return sum;
}

// with rest operator
function sum2(...args) {
  let sum = 0;
  
  args.forEach(num => {
    sum += num;
  })
  return sum;
}

// without rest operator
Function.prototype.myBind = function() {

  let args = Array.from(arguments);
  //arguments for myBind
  let context = args[0];
  let otherArgs = args.slice(1);
  //set this context inside closure
  let that = this;

  return function() { 
    //arguments for the bound function
    let newArgs = Array.from(arguments)
    that.apply(context, otherArgs.concat(newArgs));
  }
 
}

// with rest operator
Function.prototype.myBind2 = function(...args) {
  let context = args[0];
  let otherArgs = args.slice(1);
  let that = this;
  console.log(this);

  return function(...newArgs) {
    that.apply(context, otherArgs.concat(newArgs));
  }
}

function curriedSum(numArgs) {
  let numbers = [];

  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((acc,el) => {
        return acc + el;
      })
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

Function.prototype.curry = function(numArgs, context = null) {
  let args = [];
  let that = this;

  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that.apply(context, args);
    } else {
      return _curry;
    }
  }
  return _curry;
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
  
}

class Square {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  area(multiplier, multiplier2) {
    return this.x * this.y * multiplier * multiplier2 ;
  }
}

let s = new Square(2, 4);

console.log(s.area.curry(2, s)(2)(2));

console.log(sumThree.curry(3)(4)(20)(6));

// that.apply(context, otherArgs.concat(newArgs));