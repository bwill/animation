import { Student } from './student';

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jim", "M.", "User");

document.body.textContent = greeter(user);