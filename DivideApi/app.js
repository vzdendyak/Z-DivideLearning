const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const taskRoutes = require('./routes/task');

app.use(morgan('dev'));
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.use(cors());

app.use(`/api/tasks`, taskRoutes);

module.exports = app;
