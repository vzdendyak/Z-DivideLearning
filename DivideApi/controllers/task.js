const Task = require('../Data/Task')

module.exports.getAll = (req, res) => {
    let tasks = Task.getTasks();
    tasks = getRandom(tasks, 10);
    res.status(200).json({
        tasks
    });
}
module.exports.validateAnswers = (req, res) => {
    let tasks = req.body;
    let right = tasks.filter(ts => validateAnswer(ts)).length;
    res.status(200).json({
        right
    });
}
module.exports.getById = (req, res) => {
    res.status(200).json({
        analytics: true
    });
}

function validateAnswer(task) {
    let rigth = task.divisor / task.denominator;
    return rigth === task.userAnswer;
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

