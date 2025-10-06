interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: "Omar",
    lastName: "Shrif",
    age: 16,
    location: "home no.1"
}
const student2: Student = {
    firstName: "Salma",
    lastName: "Brada",
    age: 16,
    location: "home no.2"
}
let studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student: Student) => {
    const row = table.insertRow();

    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});