let currentColor = 'black';
let canDraw = false;

let screen = document.querySelector('#screen');
let contextCanvas = screen.getContext('2d');

document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

function colorClickEvent(event) {
    const color = event.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    event.target.classList.add('active');
}

function mouseDownEvent() {
    canDraw = true;
}

function mouseMoveEvent(event) {
    if(canDraw) {
        console.log(event.pageX, event.pageY)
    }
}

function mouseUpEvent() {
    canDraw = false;
}
