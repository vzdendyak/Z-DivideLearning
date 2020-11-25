const fs = require('fs');

class Task {
    constructor(id, divisor, denominator, result, description) {
        this.id = id;
        this.divisor = divisor;
        this.denominator = denominator;
        this.result = result;
        this.description = description;
    }
}
//
// let tasks = [
//     new Task(1, 4, 2, 2, '4 ділиться на 2 як 2 + 2'),
//     new Task(2, 6, 2, 3, '6 ділиться на 2 як 3 + 3'),
//     new Task(3, 8, 2, 4, '8 ділиться на 2 як 4 + 4'),
//     new Task(4, 10, 2, 5, '10 ділиться на 2 як 5 + 5'),
//     new Task(5, 15, 3, 5, '15 ділиться на 3 як 5 + 5 + 5'),
//     new Task(6, 18, 6, 3, '18 ділиться на 6 як 3 + 3 + 3 + 3 + 3 + 3'),
//     new Task(7, 21, 3, 7, '21 ділиться на 3 як 7 + 7 + 7'),
//     new Task(8, 15, 5, 3, '15 ділиться на 5 як 3 + 3 + 3 + 3 + 3'),
//     new Task(9, 25, 5, 5, '25 ділиться на 5 як 5 + 5 + 5 + 5 + 5'),
//     new Task(10, 30, 2, 15,'30 ділиться на 2 як 15 + 15')
// ];

// let data = JSON.stringify(tasks);
// fs.writeFileSync('tasks.json', data);

let data = fs.readFileSync('tasks.json');
let tasks = JSON.parse(data);


module.exports = tasks;
