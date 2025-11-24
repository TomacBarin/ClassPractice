import { Person } from "./Person.js";

const person1 = new Person(
    "Per",
    "Fritzell",
    17,
    true,
    ["läsa", "simma", "programmering"],
    {role: "student", country: "Sweden"}
);

const person2 = new Person(
    "Knut",
    "Agnred",
    21,
    true, 
    ["fotboll", "musik"],
    {role: "student", country: "Sweden"}
);

const person3 = new Person(
    "Jan", 
    "Rippe",
    35,
    false, 
    ["dans", "matlagning"],
    {role: "lärare", country: "Sweden"}
);

console.log(person1.getFullName())
console.log(person2.getFullName())
console.log(`Vilken roll har Rippe? Well, han är en ${person3.meta.role}.`)
