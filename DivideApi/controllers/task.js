const tasks = require('../Data/Task')

module.exports.getAll = (req, res) => {
    res.status(200).json({
        tasks
    });
}
module.exports.getById = (req, res) => {
    res.status(200).json({
        analytics: true
    });
}

