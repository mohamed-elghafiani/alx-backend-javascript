interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: "med",
  lastName: "lee",
  age: 26,
  location: "Morocco",
};

const student2: Student = {
  firstName: "younes",
  lastName: "how",
  age: 22,
  location: "Morocco",
};

const studentsList: Student[] = [student1, student2];

// create a table
const table = document.createElement('table');
const tbody = table.createTBody();

studentsList.map((student) => {
  const row = tbody.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

// Link tbody to table
document.body.appendChild(table);
