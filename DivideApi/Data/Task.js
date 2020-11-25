const fs = require('fs');
const Option = require('./Option');


class Task {
    constructor(id, divisor, denominator, result, options) {
        this.id = id;
        this.divisor = divisor;
        this.denominator = denominator;
        this.result = result;
        let descriptionText = `${divisor} ділиться на ${denominator} як `;
        let value = divisor / denominator;
        for (let i = 0; i < denominator; i++) {
            descriptionText += `${value} + `;
        }
        descriptionText = descriptionText.substr(0, descriptionText.length - 2);
        this.description = descriptionText;
        this.generateOptions();
        this.userAnswer = null;
    }

    generateOptions() {
        let first = this.divisor / this.denominator;
        let second = first + 1;
        let third = first - 1;
        let fourh = second + third;
        let firstId = this.id * 4;
        let options = [
            new Option(firstId, first, this.id),
            new Option(firstId + 1, second, this.id),
            new Option(firstId + 2, third, this.id),
            new Option(firstId + 3, fourh, this.id),
        ];
        this.options = options;
    }
}


let task = [
    new Task(1, 4, 2, 2),
    new Task(2, 6, 2, 3),
    new Task(2, 6, 2, 3),
    new Task(3, 8, 2, 4),
    new Task(4, 10, 2, 5),
    new Task(5, 15, 3, 5),
    new Task(6, 18, 6, 3),
    new Task(7, 21, 3, 7),
    new Task(8, 15, 5, 3),
    new Task(9, 25, 5, 5),
    new Task(10, 30, 2, 15),
    new Task(11, 5, 5, 1),
    new Task(12, 6, 3, 2),
    new Task(13, 49, 7, 7),
    new Task(14, 56, 8, 7),
    new Task(15, 36, 4, 9),
    new Task(16, 27, 3, 9),
    new Task(17, 32, 8, 4),
    new Task(18, 48, 6, 8),
    new Task(19, 42, 6, 7),
    new Task(20, 40, 5, 8)
];

// console.log(tasks);
//
// let data = JSON.stringify(tasks);
// fs.writeFileSync('tasks.json', data);

let data = fs.readFileSync('tasks.json');
let tasks = JSON.parse(data);


module.exports = {
    getTasks: function () {
        let data = fs.readFileSync('tasks.json');
        return JSON.parse(data);
    },
    tasks: tasks
}



