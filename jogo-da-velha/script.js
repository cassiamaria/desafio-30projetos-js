let board = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: '',
};

let whoseTurn = '';
let warning = '';
let gameisActive = false;

reset();

document.querySelector('.reset').addEventListener('click', reset);
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick);
});

function itemClick(event) {
    const item = event.target.getAttribute('data-item');
    if(gameisActive && board[item] === '') {
        board[item] = whoseTurn;
        renderSquare();
        togglePlayer();
    }
}

function reset() {
    warning = '';

    const randomPlayer = Math.floor(Math.random() * 2);
    whoseTurn = randomPlayer === 0 ? 'X' : 'O';

    for(let i in board) {
        board[i] = '';
    }

    renderSquare();
    renderInfo();

    gameisActive = true;
}

function renderSquare() {
    for(let i in board){
        const item = document.querySelector(`div[data-item=${i}]`)
        item.innerHTML = board[i];
    }

    checkGame();
}

function renderInfo() {
    document.querySelector('.turn').innerHTML = whoseTurn;
    document.querySelector('.result').innerHTML = warning;

}

function togglePlayer() {
    whoseTurn = (whoseTurn === 'X') ? 'O'  : 'X';
    renderInfo();
}

function checkGame() {
    if(checkWinnerFor('X')) {
        warning = 'O vencedor é: "X"!';
        gameisActive = false;
    } else if (checkWinnerFor('O')) {
        warning = 'O vencedor é: "O"!';
        gameisActive = false;
    } else if(isFull()) {
        warning = 'Deu empate!';
        gameisActive = false;
    }
}

function checkWinnerFor(i) {
    const possibilities = [
        'a1, a2, a3',
        'b1, b2, b3',
        'c1, c2, c3',

        'a1, b1, c1',
        'a2, b2, c2',
        'a3, b3, c3',

        'a1, b2, c3',
        'a3, b2, c1'
    ];
    
    for(let w in possibilities) {
        const possibilitiesArray = possibilities[w].split(',');
        const hasWon = possibilitiesArray.every(option => board[option] === i);
        if(hasWon) {
            return true;
        }
    }
    return false;
}

function isFull() {
    for(let i in board) {
        if(board[i] === '') {
            return false;
        }
    }
    return true;
}
