class Manager {
    constructor() {
        this.attempts = 3;
        this.openedPair = 0;
        this.openedCards = [];
        this.gameBoard = new Board();
        this.cards = this.gameBoard.cardList;

        this.gameBoard.shuffle();
        this.gameBoard.addCardOnBoard();
        this.showAllCards();
        this.cards.forEach((elem) => elem.element.addEventListener('click', (elem) => this.checkPair(elem)));
    }

    showAllCards() {
        this.cards.forEach((card) => {
            card.flip();
            setTimeout(() => card.flip(), 2000)
        })
    }

    flipCard(elem) {
        if (!elem.target.card.flipped && this.openedCards.length < 2) {
            elem.target.card.flip();
            this.openedCards.push(elem.target.card);
        }
    }

    checkPair(elem) {
        this.flipCard(elem);
        if (elem.target.card.image === 'fin.webp') {
            this.showGameResult('finn');
        }
        if (this.openedCards.length === 2) {
            if (this.openedCards[0].image == this.openedCards[1].image) {
                this.openedCards.forEach((card) => {
                    card.element.card = null
                    card.flipped = false;
                });
                this.openedCards = [];
                this.openedPair++;
                this.checkOpenedPair();
                console.log(this.openedPair);
            } else {
                setTimeout(() => {
                    this.openedCards.forEach((card) => card.flip())
                    this.openedCards = [];
                }, 300);
                this.attempts--;
                this.checkAttempts();
            }
        }
    }

    checkAttempts() {
        if (this.attempts === 0) {
            this.showGameResult('loose');
        }
    }

    checkOpenedPair() {
        if (this.openedPair === 5) {
            this.showGameResult('win');
        }
    }

    showGameResult(result) {
        const popup = document.getElementById("popup");
        const overlay = document.getElementById("popupOverlay");
        const img = popup.querySelector('img')
        const text = popup.querySelector('h2');

        this.gameBoard.element.classList.add('grayscale')
        overlay.style.display = "block";
        switch (result) {
            case 'win':
                text.innerText = 'You did it!'
                img.src = 'images/win.gif'
                popup.style.display = "block";
                break;
            case 'loose':
                text.innerText = 'Game over'
                img.src = 'images/loose.gif'
                popup.style.display = "block";
                break;
            case 'finn':
                text.innerText = 'I told you so'
                img.src = 'images/fin.gif'
                popup.style.display = "block";
                break;
        }

    }
}