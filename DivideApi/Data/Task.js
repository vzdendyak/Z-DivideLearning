const fs = require('fs');
const Option = require('./Option');


class LearningTask {
    static i = 0;

    constructor(divisor, denominator) {
        this.id = LearningTask.i;
        this.divisor = divisor;
        this.denominator = denominator;
        this.result = divisor / denominator;
        let descriptionText = `${divisor} ділиться на ${denominator} як `;
        let value = divisor / denominator;
        for (let i = 0; i < denominator; i++) {
            descriptionText += `${value} + `;
        }
        descriptionText = descriptionText.substr(0, descriptionText.length - 2);
        this.description = descriptionText;
        this.generateOptions();
        this.userAnswer = null;
        LearningTask.i++;
    }

    generateOptions() {
        let first = this.divisor / this.denominator;
        let second = first + 1;
        let third = first - 1;
        let fourh = second + third;
        let firstId = this.id * 4;
        this.options = [
            new Option(firstId, first, this.id),
            new Option(firstId + 1, second, this.id),
            new Option(firstId + 2, third, this.id),
            new Option(firstId + 3, fourh, this.id),
        ];
    }
}

class PracticeTask {
    static i = 0;

    constructor(divisor, denominator) {
        this.id = PracticeTask.i;
        this.divisor = divisor;
        this.denominator = denominator;
        this.result = divisor / denominator;
        let descriptionText = `${divisor} ділиться на ${denominator} як `;
        let value = divisor / denominator;
        for (let i = 0; i < denominator; i++) {
            descriptionText += `${value} + `;
        }
        descriptionText = descriptionText.substr(0, descriptionText.length - 2);
        this.description = descriptionText;
        this.generateOptions();
        this.userAnswer = null;
        PracticeTask.i++;
    }

    generateOptions() {
        let first = this.divisor / this.denominator;
        let second = first + 1;
        let third = first - 1;
        let fourh = second + third;
        let firstId = this.id * 4;
        this.options = [
            new Option(firstId, first, this.id),
            new Option(firstId + 1, second, this.id),
            new Option(firstId + 2, third, this.id),
            new Option(firstId + 3, fourh, this.id),
        ];
    }
}

class ExamTask {
    static i = 0;

    constructor(divisor, denominator) {
        this.id = ExamTask.i;
        this.divisor = divisor;
        this.denominator = denominator;
        this.generateOptions();
        this.userAnswer = null;
        ExamTask.i++;
    }

    generateOptions() {
        let first = this.divisor / this.denominator;
        let second = first + 1;
        let third = first - 1;
        let fourh = second + third;
        let firstId = this.id * 4;
        this.options = [
            new Option(firstId, first, this.id),
            new Option(firstId + 1, second, this.id),
            new Option(firstId + 2, third, this.id),
            new Option(firstId + 3, fourh, this.id),
        ];
    }
}

let lrTasks = [];
for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
        let divisor = i * j;
        let task = new LearningTask(divisor, i);
        lrTasks.push(task);
    }
}

let prTasks = [
    new PracticeTask(4, 2,),
    new PracticeTask(6, 2),
    new PracticeTask(6, 2),
    new PracticeTask(8, 2),
    new PracticeTask(10, 2),
    new PracticeTask(15, 3),
    new PracticeTask(18, 6),
    new PracticeTask(21, 3),
    new PracticeTask(15, 5),
    new PracticeTask(25, 5),
    new PracticeTask(30, 2),
    new PracticeTask(5, 5),
    new PracticeTask(6, 3),
    new PracticeTask(49, 7),
    new PracticeTask(56, 8),
    new PracticeTask(27, 3),
    new PracticeTask(32, 8),
    new PracticeTask(48, 6),
    new PracticeTask(42, 6),
    new PracticeTask(40, 5)
];

let exTasks = [
    new ExamTask(4, 2),
    new ExamTask(6, 2),
    new ExamTask(3, 3),
    new ExamTask(16, 4),
    new ExamTask(24, 4),
    new ExamTask(28, 4),
    new ExamTask(32, 4),
    new ExamTask(27, 9),
    new ExamTask(18, 6),
    new ExamTask(14, 7),
    new ExamTask(12, 4),
    new ExamTask(9, 3),
    new ExamTask(30, 3),
    new ExamTask(32, 4),
    new ExamTask(33, 3),
    new ExamTask(48, 6),
    new ExamTask(56, 8),
    new ExamTask(63, 9),
    new ExamTask(72, 8),
    new ExamTask(81, 9),
    new ExamTask(49, 7),
    new ExamTask(42, 6),
    new ExamTask(36, 4),
    new ExamTask(25, 5),
    new ExamTask(45, 5),
    new ExamTask(40, 8)
];


let data = JSON.stringify(lrTasks);
fs.writeFileSync('learning.json', data);

data = JSON.stringify(prTasks);
fs.writeFileSync('practice.json', data);

data = JSON.stringify(exTasks);
fs.writeFileSync('exam.json', data);


// let data = fs.readFileSync('tasks.json');
// let tasks = JSON.parse(data);


module.exports = {
    getExamTasks: function () {
        let data = fs.readFileSync('exam.json');
        return JSON.parse(data);
    },
    getPracticeTasks: function () {
        let data = fs.readFileSync('practice.json');
        return JSON.parse(data);
    },
    getLearningTasks: function () {
        let data = fs.readFileSync('learning.json');
        return JSON.parse(data);
    }
}



