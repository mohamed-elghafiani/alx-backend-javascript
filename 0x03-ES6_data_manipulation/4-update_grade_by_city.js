export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const filteredGrade = newGrades.filter((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: filteredGrade.length > 0 ? filteredGrade[0].grade : 'N/A',
      };
    });
}
