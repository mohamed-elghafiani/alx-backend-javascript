const fs = require('fs');
const { promisify } = require('util');

async function countStudents(path) {
  const studentsByField = {};
  const readFileAsync = promisify(fs.readFile);

  try {
    const data = await fs.readFileSync(path, 'utf-8');

    const rows = data.split('\n').filter(Boolean);

    // Remove the first row (headers)
    rows.shift();

    rows.forEach(row => {
      row = row.split(',');

      if (!studentsByField[row[3]]) {
        studentsByField[row[3]] = [];
      }

      studentsByField[row[3]].push(row[0]);
    });

    console.log(`Number of students: ${rows.length}`);

    for (const field in studentsByField) {
      const fieldStudents = studentsByField[field];
      const students = fieldStudents.join(', ');
      const numStudents = fieldStudents.length;
      console.log(`Number of students in ${field}: ${numStudents}. List: ${students}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
