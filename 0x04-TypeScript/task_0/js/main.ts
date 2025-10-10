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

const tBody = document.createElement("tbody");

studentsList.forEach((student: Student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tBody.appendChild(row);
});

table.appendChild(tBody);