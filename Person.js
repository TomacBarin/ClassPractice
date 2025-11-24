// Person.js

export class Person {
    constructor(firstName, lastName, age, isActive = true, hobbies = [], meta = {}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isActive = isActive;
        this.hobbies = hobbies;
        this.meta = meta;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getInfo() {
        const activeStatus = this.isActive ? "aktiv" : "inaktiv";
        const role = this.meta.role || "okänd roll";

        return `${this.getFullName()} är ${this.age} år gammal, är ${activeStatus} i gruppen och har rollen "${role}".`;
    }

    // Växlar mellan aktiv och inaktiv
    toggleActive() {
        this.isActive = !this.isActive;
    }
}
