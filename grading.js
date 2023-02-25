function gradingStudents(grades = [73, 67, 38, 33]) {
	return grades.map(grade => {
		if (grade > 37) if (grade % 5 > 2) grade += 5 - (grade % 5)
		return grade
	})
}
