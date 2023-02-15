// var canvasWidth = 500, canvasHeight = 300;
// var count = 0;
var firstSpeed = 0;
var secondSpeed = 0;
var thirdSpeed = 0;
var fourthSpeed = 0;

function setup() {
    createCanvas(800, 320);
    rectMode(CENTER);
}
  
   function draw() {
    background(220, 220, 220, 30);
    var speed = -100;

    // 1st rectangle
    noFill()
    rect((speed + firstSpeed) < (-speed + width) ? speed + firstSpeed : firstSpeed = 0, 40, 200, 80);

    // 2nd rectangle
    rect((speed + secondSpeed) < (-speed + width) ? speed + secondSpeed : secondSpeed = 0, 120, 200, 80);

    // 3rd rectangle
    rect((speed + thirdSpeed) < (-speed + width) ? speed + thirdSpeed : thirdSpeed = 0, 200, 200, 80);

    // 4th rectangle
    rect((speed + fourthSpeed) < (-speed + width) ? speed + fourthSpeed : fourthSpeed = 0, 280, 200, 80);

    firstSpeed += 1;
    secondSpeed += 2;
    thirdSpeed += 3;
    fourthSpeed += 4;

//     var x = width / 2, y = height / 2;
//     var size = 200 + count;

//     // circle
//     fill(237, 34, 93);
//     noStroke();
//     ellipse(x, y, size, size);

//     //rectangle
//     fill(255);
//     rect(x, y, size * 0.75, size * 0.15);

//    count = count + 1;

//     ellipse(100 + x, 200, 50, 50); // left wheel
//     ellipse(200 + x, 200, 50, 50); // right wheel
//     rect(50 + x, 160, 200, 20); // cart body
}