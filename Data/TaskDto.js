module.exports = class TaskDto {
    constructor(id, divisor, denominator, result, userAnswer, correctAnswer) {
        this.id = id;
        this.divisor = divisor;
        this.denominator = denominator;
        this.result = result;
        this.userAnswer = userAnswer;
        this.correctAnswer = correctAnswer;
    }

}
