const fs = require('fs');
const { promisify } = require('util');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    const studentsByField = {};
    const readFileAsync = promisify(fs.readFile);

    readFileAsync(path, 'utf-8')
      .then((data) => {
        const rows = data.split('\n').filter(Boolean);

        // Remove the first row (headers)
        rows.shift();

        rows.forEach((row) => {
          const items = row.split(',');

          if (!studentsByField[items[3]]) {
            studentsByField[items[3]] = [];
          }

          studentsByField[items[3]].push(items[0]);
        });

        console.log(`Number of students: ${rows.length}`);
        Object.keys(studentsByField).forEach((field) => {
          const fieldStudents = studentsByField[field];
          const students = fieldStudents.join(', ');
          const numStudents = fieldStudents.length;
          console.log(`Number of students in ${field}: ${numStudents}. List: ${students}`);
        });
        resolve();
      }).catch((err) => {
        reject(err);
        throw new Error('Cannot load the database');
      });
  });
}

module.exports = countStudents;
