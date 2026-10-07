let myFont;

// Download font
function preload() {
  thePoliceFont = loadFont('Berthold Akzidenz Grotesk Medium.otf');
}

// General concept comments: This is a replication of The Police Swiss poster from 1978. I decided to take advantage of the gradual difference in the circle sizes to scale it for it to look like a wave, since I just thought that's how the poster would move naturally if animated. I also decided to add a yellow background before the text to resemble the caution tape that the police use to protect people from crime scenes or dangerous areas and also I wanted the text to move like text news ticks so to give the idea that is like a big breaking news event.

// initializing arrays
let pinkCircles = [];
let blueCircles = [];
let yellowCircles = [];
let minSizeCircle = 7;
let maxSizeCircle = 50.73;

// initializing variables
let titleX = 15;
let dateX = 20;
let placeX = 148;
let moreInfoX = 400;
let titleSpeed = 1;
let infoSpeed = -1;
let textOpacity = 0;
let opacitySpeed = 2;


    // Initializing colors

    // Pink color
  function pinkColor() {
    fill(242, 0, 133);
    stroke(242, 0, 133);
  }

      // Blue color
  function blueColor() {
    fill(1, 175, 246);
    stroke(1, 175, 246);
  }

    // Yellow color
  function yellowColor() {
    fill(255, 208, 54);
    stroke(255, 208, 54);
  }

// to fill up the arrays of the circles
function setup() {
  createCanvas(566, 800);

  // initializing circles components
  let columnSpace = width/11;
  let rowSpace = columnSpace;
  let pinkFocalPtX = width - columnSpace;
  let pinkFocalPtY = columnSpace;
  let maxRing = columnSpace * 10;


  // Pink circles
  for (let x = pinkFocalPtX; x >= 0; x -= columnSpace) {
    for (let y = pinkFocalPtY; y <= width; y += columnSpace) {
        let horizontalSteps = abs(x - pinkFocalPtX);
        let verticalSteps = abs(y - pinkFocalPtY);
        let ring = max(horizontalSteps, verticalSteps);
        let circleSize = 7 + ring * 0.085;
        pinkCircles.push({x: x + 20.5,y: y - 19.5, size: circleSize, phase: (ring / maxRing) * PI});
    }
  }

  // Blue circles
  for (let x = pinkFocalPtX; x >= 0; x -= columnSpace) {
    for (let y = pinkFocalPtY; y <= width; y += columnSpace) {
        let horizontalSteps = abs(x - pinkFocalPtX);
        let verticalSteps = abs(y - pinkFocalPtY);
        let ring = max(horizontalSteps, verticalSteps);
        let circleSize = 7 + ring * 0.085;
        blueCircles.push({x: x + 25,y: y - 27, size: circleSize, phase: (ring / maxRing) * PI});
    }
  }

// Yellow circles
  for (let x = pinkFocalPtX; x >= 0; x -= columnSpace) {
    for (let y = pinkFocalPtY; y <= width; y += columnSpace) {
        let horizontalSteps = abs(x - pinkFocalPtX);
        let verticalSteps = abs(y - pinkFocalPtY);
        let ring = max(horizontalSteps, verticalSteps);
        let circleSize = 7 + ring * 0.085;
        yellowCircles.push({x: x + 29.5,y: y - 19.5, size: circleSize, phase: (ring / maxRing) * PI});
    }
  }
}

// to draw the circles and text
function draw() {

  background(218, 224, 210);

  blendMode(MULTIPLY);

  // Draw pink circles
  for (let c of pinkCircles) {
  let cycle = c.phase + frameCount * 0.018;
  let wave = (sin(cycle - HALF_PI) + 1) / 2;
  let newSize = minSizeCircle + wave * (maxSizeCircle - minSizeCircle);
  pinkColor();
  circle(c.x, c.y, newSize);
}

  // Draw blue circles
  for (let c of blueCircles) {
  let cycle = c.phase + frameCount * 0.018;
  let wave = (sin(cycle - HALF_PI) + 1) / 2;
  let newSize = minSizeCircle + wave * (maxSizeCircle - minSizeCircle);
  blueColor();
  circle(c.x, c.y, newSize);
}

  // Draw yellow circles
  for (let c of yellowCircles) {
  let cycle = c.phase + frameCount * 0.018;
  let wave = (sin(cycle - HALF_PI) + 1) / 2;
  let newSize = minSizeCircle + wave * (maxSizeCircle - minSizeCircle);
  yellowColor();
  circle(c.x, c.y, newSize);
}
  
  blendMode(BLEND);

  // blinking effect of text and yellow background
  textOpacity = (sin(frameCount * 0.05 + HALF_PI) + 1) / 2 * 255;
  
  
// Yellow caution tape effect for text
  fill(255, 208, 54, textOpacity);
  rect(0, 585, width, 85);
  rect(0, 750, width, 27.5);

  // text looping back into the poster
  titleX += titleSpeed;
  if (titleX > width) {
  titleX = -330;
}
  dateX += infoSpeed;
  if (dateX < -130) {
  dateX = width;
}
  placeX += infoSpeed;
  if (placeX < -130) {
  placeX = width;
} 
  moreInfoX += infoSpeed;
if (moreInfoX < -130) {
  moreInfoX = width;
}
  
  // The Police text
  fill(0, 0, 0, textOpacity);
  stroke(0, 0, 0, textOpacity);
  strokeWeight(1);
  textFont(thePoliceFont);
  textSize(75);
  text('the police', titleX, 649);

  // Event info text
  strokeWeight(0);
  textSize(11);
  text('friday & saturday\noctober 20 & 21 1978', dateX, 760);
  text('at cbgb and omfug\n315 bowery at bleecker / new york city', placeX, 760);
  text('two nights\nfirst u.s. appearance!', moreInfoX, 760);
  }     