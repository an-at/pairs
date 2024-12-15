const menu = document.querySelector('.menu');
const startButton = document.querySelector('.start-button');

startButton.addEventListener('click', startGame);

function startGame() {
    menu.style.display = 'none';
    const newGame = new Manager();
}
