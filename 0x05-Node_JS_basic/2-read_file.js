const fs = require('fs');

function countStudents(path) {
  const studentsByField = {};

  try {
    const data = fs.readFileSync(path, 'utf-8');

    const rows = data.split('\n').filter(Boolean);

    // Remove the first row (headers)
    const headers = rows.shift();

    rows.forEach(row => {
      const [firstName, lastName, age, field] = row.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstName);
    });

    console.log(`Number of students: ${rows.length}`);

    for (const field in studentsByField) {
      const fieldStudents = studentsByField[field];
      console.log(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
