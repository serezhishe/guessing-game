class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min + 1;
        this.max = max - 1;
    }

    guess() {
        this.current = Math.ceil((this.max + this.min)/2);
        return this.current;
    }

    lower() {
        this.max = this.current - 1;
    }

    greater() {
        this.min = this.current + 1;
    }
}

module.exports = GuessingGame;
