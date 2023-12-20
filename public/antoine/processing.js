var nbrProLine = 10

let nbrVertical = 10

let radius = 0

let speed = 5

let marginBackground = 100

function setup () {
  var canvas = createCanvas(windowWidth, windowHeight)
  canvas.parent('canvasAntoine')
  background(255, 0, 200)
}

function draw () {
  background(255)
  radius = radius + speed

  for (
    let postY = height / nbrVertical / 2;
    postY < height;
    postY = postY + height / nbrVertical
  ) {
    drawCircle(width / 2, postY, radius)
  }
}

function drawCircle (x, y, radius) {
  stroke(0)
  noFill()
  ellipse(x, y, radius, radius)

  ellipse(width / 2, height / 2, radius, radius)

  ellipse(width / 2, height / 2, radius % width, radius % height)

  let variableTest = 2

  if (radius > variableTest) {
    drawCircle(x + radius / variableTest, y, radius / variableTest)
    drawCircle(x - radius / variableTest, y, radius / variableTest)
  }
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight)
}
