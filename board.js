class Board {
    constructor() {
        this.imageArray = ['fin.webp', 'jake.webp', 'iceking.webp', 'marc.webp', 'pmint.webp', 'ricar.webp', 'jake.webp', 'iceking.webp', 'marc.webp', 'pmint.webp', 'ricar.webp'];
        this.element = document.createElement('div');
        this.cardList = [];

        this.element.classList.add('gameboard');
        document.body.append(this.element);
    }

    addCardOnBoard() {
        this.imageArray.forEach((img) => {
            let card = new Card(img);
            this.cardList.push(card);
        });
        this.cardList.forEach((card) => {
            this.element.append(card.element);
        })
    }

    shuffle() {
        this.imageArray.sort(() => Math.random() - 0.5);
    }
}