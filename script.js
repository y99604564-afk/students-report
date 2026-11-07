// 1. Student Class
class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // 2. Calculate Average using reduce
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    // 3. Calculate Grade
    getGrade() {
        let average = this.calculateAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // 4. Final Result
    getResult() {
        let average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

// 5. Students Array
let studentsList = [
    new Student(101, "Ahmed", [90, 85, 95], 90),
    new Student(102, "Yara", [45, 48, 42], 80),
    new Student(103, "Heba", [40, 45, 48], 70),
    new Student(104, "Abdo", [70, 75, 80], 95)
];

// 6. Filter Students (Average between 40 and 49)
let strugglingStudents = studentsList.filter(student => {
    let average = student.calculateAverage();
    return average >= 40 && average <= 49;
});

// 7. Add 5 Grace Marks using map
let graceStudents = strugglingStudents.map(student => {
    let oldAverage = student.calculateAverage();
    let newAverage = oldAverage + 5;

    return {
        id: student.id,
        name: student.name,
        oldAverage: oldAverage,
        newAverage: newAverage
    };
});

// 8. Calculate Total New Averages using reduce
let totalGraceAverage = graceStudents.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);

// 9. Calculate General Average with Protection
let generalGraceAverage = 0;

if (graceStudents.length > 0) {
    generalGraceAverage = totalGraceAverage / graceStudents.length;
}

// 10. Print Student Reports
console.log("===== STUDENTS REPORT =====");

studentsList.forEach(student => {
    console.log("----------------------");
    console.log("Name:", student.name);
    console.log("Average:", student.calculateAverage());
    console.log("Grade:", student.getGrade());
    console.log("Result:", student.getResult());
});

// 11. Print Grace Students
console.log("===== GRACE STUDENTS =====");
console.log(graceStudents);

// 12. Print General Grace Average
console.log("===== GRACE AVERAGE =====");
console.log("General Average:", generalGraceAverage);