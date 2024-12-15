class Card {
    constructor(image) {
        this.image = image;
        this.flipped = false;
        this.element = document.createElement('div');

        this.element.classList.add('card-block');
        this.element.style.backgroundImage = "url('images/card-cover.webp')";
        this.element.card = this;
    }

    flip() {
        this.flipped
            ? this.element.style.backgroundImage = "url('images/card-cover.webp')"
            : this.element.style.backgroundImage = `url('images/${this.image}')`
        this.flipped = !this.flipped
    }
}