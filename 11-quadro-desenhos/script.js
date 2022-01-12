let currentColor = "black";
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector("#canvasScreen");
let contextCanvas = screen.getContext("2d");

document.querySelectorAll(".colorArea .color").forEach((item) => {
  item.addEventListener("click", colorClickEvent);
});

screen.addEventListener("mousedown", mouseDownEvent);
screen.addEventListener("mousemove", mouseMoveEvent);
screen.addEventListener("mouseup", mouseUpEvent);
document.querySelector(".clear").addEventListener("click", clearScreen);

function colorClickEvent(event) {
  const color = event.target.getAttribute("data-color");
  currentColor = color;

  document.querySelector(".color.active").classList.remove("active");
  event.target.classList.add("active");
}

function mouseDownEvent(event) {
  canDraw = true;
  mouseX = event.pageX - screen.offsetLeft;
  mouseY = event.pageY - screen.offsetTop;
}

function mouseMoveEvent(event) {
  if (canDraw) {
    drawing(event.pageX, event.pageY);
  }
}

function mouseUpEvent() {
  canDraw = false;
}

function drawing(x, y) {
  let pointX = x - screen.offsetLeft;
  let pointY = y - screen.offsetTop;

  contextCanvas.beginPath();
  contextCanvas.lineWidth = 5;
  contextCanvas.lineJoin = "round";
  contextCanvas.moveTo(mouseX, mouseY);
  contextCanvas.lineTo(pointX, pointY);
  contextCanvas.closePath();
  contextCanvas.strokeStyle = currentColor;
  contextCanvas.stroke();

  mouseX = pointX;
  mouseY = pointY;
}

function clearScreen() {
  contextCanvas.setTransform(1, 0, 0, 1, 0, 0);
  contextCanvas.clearRect(0, 0, contextCanvas.canvas.width, contextCanvas.canvas.height)
}