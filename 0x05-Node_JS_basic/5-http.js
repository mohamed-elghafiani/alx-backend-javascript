const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;
    const databasePath = process.argv.slice(2)

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (path === '/') {
        res.end('Hello Holberton School!');
    } else if (path === '/students') {
        countStudents(databasePath)
            .then((studentsInfo) => {
                res.end(`This is the list of our students\n${studentsInfo}`);
            })
            .catch((error) => {
                res.end(`Error: ${error.message}`);
            });
    } else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
