let opacity = 255

let backgroundColorPicker

// circles
let circleNumSlider
let circleGapSlider
let fromColorPicker
let toColorPicker

// // lines 1
// let lines1NumSlider
// let lines1LenSlider
// let lines1DistSlider
// let lines1SpinSlider
// let lines1ColorPicker
// let lines1StrokeWeightSlider
// let showLines1Checkbox

// triangles
let triangle1NumSlider
let triangle1LenSlider
let triangle1DistSlider
let triangle1SpinSlider
let triangle1ColorPicker
let triangle1StrokeWeightSlider
let showtriangle1Checkbox

// // lines 2
// let lines2NumSlider
// let lines2LenSlider
// let lines2DistSlider
// let lines2SpinSlider
// let lines2ColorPicker
// let lines2StrokeWeightSlider

// ellipse
let ellipseNumSlider
let ellipseLenSlider
let ellipseDistSlider
let ellipseSpinSlider
let ellipseColorPicker
let ellipseStrokeWeightSlider

function setup() {
  createCanvas(400, 400);
  strokeWeight(30)
  strokeCap(PROJECT)

  backgroundColorPicker = createColorPicker("#edf4d8")
  // circles
  createP('Circles')
  createElement('label', 'num')
  circleNumSlider = createSlider(1,10, 1) // min, max, default, step
  createElement('label', 'gap')
  circleGapSlider = createSlider(50,150, 10)
  fromColorPicker = createColorPicker("#00ff37")
  toColorPicker = createColorPicker("#a600ff")

  // triangles
  createP('Triangles')
  createElement('label', 'num')
  triangle1NumSlider = createSlider(1,12,5)
  createElement('label', 'len')
  triangle1LenSlider = createSlider(30, 150, 60)
  createElement('label', 'dist')
  triangle1DistSlider = createSlider(0, 150, 100)
  createElement('label', 'spin')
  triangle1SpinSlider = createSlider(0, 360, 90, 5)
  triangle1ColorPicker = createColorPicker("#5cd494")
  createElement('label', 'thickness')
  triangle1StrokeWeightSlider = createSlider(10, 60, 30)
  showtriangle1Checkbox = createCheckbox('show', true);

//   // lines 1
//   createP('Lines 1')
//   createElement('label', 'num')
//   lines1NumSlider = createSlider(1,12,5)
//   createElement('label', 'len')
//   lines1LenSlider = createSlider(30, 150, 60)
//   createElement('label', 'dist')
//   lines1DistSlider = createSlider(0, 150, 100)
//   createElement('label', 'spin')
//   lines1SpinSlider = createSlider(0, 360, 90, 5)
//   lines1ColorPicker = createColorPicker("#5cd494")
//   createElement('label', 'thickness')
//   lines1StrokeWeightSlider = createSlider(10, 60, 30)
//   showLines1Checkbox = createCheckbox('show', true);

//   // lines 2
//   createP('Lines 2')
//   createElement('label', 'num')
//   lines2NumSlider = createSlider(1,12,5)
//   createElement('label', 'len')
//   lines2LenSlider = createSlider(30, 150, 60)
//   createElement('label', 'dist')
//   lines2DistSlider = createSlider(0, 150, 100)
//   createElement('label', 'spin')
//   lines2SpinSlider = createSlider(0, 360, 0, 5)
//   lines2ColorPicker = createColorPicker("#9869bf")
//   createElement('label', 'thickness')
//   lines2StrokeWeightSlider = createSlider(10, 60, 30)

//   let jpgButton = createButton('Export JPG')
//   jpgButton.mousePressed(function() {
//     saveCanvas('myCanvas', 'jpg');
//   })
// }

// lines 2
  createP('Ellipse')
  createElement('label', 'num')
  ellipseNumSlider = createSlider(1,12,5)
  createElement('label', 'len')
  ellipseLenSlider = createSlider(30, 150, 60)
  createElement('label', 'dist')
  ellipseDistSlider = createSlider(0, 150, 100)
  createElement('label', 'spin')
  ellipseSpinSlider = createSlider(0, 360, 0, 5)
  ellipseColorPicker = createColorPicker("#9869bf")
  createElement('label', 'thickness')
  ellipseStrokeWeightSlider = createSlider(10, 60, 30)

  let jpgButton = createButton('Export JPG')
  jpgButton.mousePressed(function() {
    saveCanvas('myCanvas', 'jpg');
  })
}

function draw() {
  background(backgroundColorPicker.value());
  translate(width/2, height/2)
  if (showtriangle1Checkbox.checked()) {
    drawTriangles()
  }
  
  drawEllipse()
  drawCircles()
}

function drawCircles() {
  let num = circleNumSlider.value()
  let gap = circleGapSlider.value()
  let from = color(fromColorPicker.value())
  let to = color(toColorPicker.value())
  for(let i=0; i < num; i++) {
    push()
    noFill()
    strokeWeight(10)
    // stroke(255,0,255,opacity)
    stroke(lerpColor(from, to, i/num))
    circle(0,0, (i+1) * gap)
    pop()
  }
}

function drawTriangles() {
  let num = triangle1NumSlider.value()  // slider input
  let len = triangle1LenSlider.value() //// slider input
  let c = color(triangle1ColorPicker.value())
  c.setAlpha(opacity)
  for(let i = 0; i < num; i++) {
    push()
    strokeWeight(triangle1StrokeWeightSlider.value())
    stroke(c) // color picker
    // translate(100,0)
    rotate(i/num * TWO_PI)
    translate(triangle1DistSlider.value() ,0) // dist from center
    rotate(radians(triangle1SpinSlider.value())) // slider input
    triangle(-20, 25, 8, -30, 36, 25)
    // triangle(-len/2, 0, len/2, 0, 0, 0)
    pop()
  }
  
}

// function drawLines() {
//   let num = lines1NumSlider.value()  // slider input
//   let len = lines1LenSlider.value() //// slider input
//   let c = color(lines1ColorPicker.value())
//   c.setAlpha(opacity)
//   for(let i = 0; i < num; i++) {
//     push()
//     strokeWeight(lines1StrokeWeightSlider.value())
//     stroke(c) // color picker
//     // translate(100,0)
//     rotate(i/num * TWO_PI)
//     translate(lines1DistSlider.value() ,0) // dist from center
//     rotate(radians(lines1SpinSlider.value())) // slider input
//     line(-len/2,0,len/2,0)
    
//     pop()
//   }
  
// }


function drawEllipse() {
  let num = ellipseNumSlider.value() // slider input
  let len = ellipseLenSlider.value() // slider input
  let c = color(ellipseColorPicker.value())
  c.setAlpha(opacity)
  for(let i = 0; i < num; i++) {
    push()
    stroke(c)
    strokeWeight(ellipseStrokeWeightSlider.value())
    rotate(i/num * TWO_PI)
    translate(ellipseDistSlider.value(), 0) // distance from the center
    rotate(-radians(ellipseSpinSlider.value())) // slider input    
    line(-len/2,0,len/2,0) 
    ellipse(0, 0, 80, 40, 6)
    pop()
  }
}

// function drawLines2() {
//   let num = lines2NumSlider.value() // slider input
//   let len = lines2LenSlider.value() // slider input
//   let c = color(lines2ColorPicker.value())
//   c.setAlpha(opacity)
//   for(let i = 0; i < num; i++) {
//     push()
//     stroke(c)
//     strokeWeight(lines2StrokeWeightSlider.value())
//     rotate(i/num * TWO_PI)
//     translate(lines2DistSlider.value(), 0) // distance from the center
//     rotate(-radians(lines2SpinSlider.value())) // slider input    
//     line(-len/2,0,len/2,0) 
//     pop()
//   }
// }


// let circleNumSlider
// let circleGapSlider
// // let circleColorPicker
// let fromColorPicker
// let toColorPicker

   
// function setup() {
// createCanvas(400, 400);
// noFill()
// strokeWeight(10)
// createP("circle")
// createElement("label", "num")
// circleNumSlider = createSlider(1, 10, 3)
// createElement("label", "gap")
// circleGapSlider = createSlider(50, 150, 50)
// // circleColorPicker = createColorPicker("lime")
// fromColorPicker = createColorPicker("red")
// toColorPicker = createColorPicker("blue")
// createElement("label", "lens")
// circleLensSlider = createSlider()
// createElement("label", "distance")
// circleDistSlider = createSlider
// }

// function draw() {
// background(0);
// translate(width/2, height/2)
// // circle(0,0,100)
// drawCircles()
// let lines1LensSlider
// let lines1DistSlider
// let num = 10
// for(let i = 0; i < 5; i++) {
//     push()
//     // rotate(i/5 * TWO_PI)
//     rotate(frameCount * 0.05)
//     translate(100, 0)
//     line(-len/2, 0, len/2, 0) 
//     pop()
// }
// }


// function drawCircles() {
// let num = circleNumSlider.value()
// let gap = circleGapSlider.value()
// let from = color(fromColorPicker.value())
// let to = color(toColorPicker.value())
// for(let i = 0; i < 5; i++) {
//      push()
//     //  stroke("white")
//     //  fill("orange")
//     stroke(lerpColor(from, to, i/num))
//     circle(0, 0, (i+1) * gap)
//     pop()  
// }

// }