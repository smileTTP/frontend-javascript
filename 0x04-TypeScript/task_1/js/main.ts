interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
};
const teacher1: Teacher = {
    firstName: 'Salma',
    fullTimeEmployee: false,
    lastName: 'Badi',
    location: 'Germany',
    contract: true,
};
console.log(teacher1);
