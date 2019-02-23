function setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  for (var i = 0; i < x.length; i = i + 10) {
    square(x[i], y[i], 1 + (x.length - i))
    ellipse(x[i], y[i], 1 + (x.length - i))
    triangle(x[i], y[i], 1 + (x.length - i),[i])
      }

  x = x.slice(-50); // keep the last 50 x values
  y = y.slice(-50); // keep the last 50 y values
}
//HAVING PROBLEM ON FIGURING OUT HOW TO MAKE TRIANGLE CODE WORK (LINE 18)
