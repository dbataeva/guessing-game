class GuessingGame {
    _min;
    _max;

    _lastNumber;

    constructor() {}

    setRange(min, max) {
        this._min = min;
        this._max = max;
    }

    guess() {
        this._lastNumber = Math.round((this._max + this._min) / 2);
        return this._lastNumber;
    }

    lower() {
        this._max = this._lastNumber;
    }

    greater() {
        this._min = this._lastNumber;
    }
}

module.exports = GuessingGame;
