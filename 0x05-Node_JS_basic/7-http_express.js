const express = require('express');
const countStudents = require('./3-read_file_async');
const path = require('path');

const app = express();
const PORT = 1245;

app.use((req, res, next) => {
    const dbFilePath = process.argv[2];
    if (!dbFilePath) {
        return res.status(500).send('No database file specified');
    }
    next();
});

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
    const dbFilePath = process.argv[2];
    try {
        const result = await countStudents(dbFilePath);
        res.send(`This is the list of our students\n${result}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
