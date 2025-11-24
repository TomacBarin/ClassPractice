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

// Logga getInfo() till console.log

const allPeople = [person1, person2, person3];

// Printa i DOM:en
const output = document.querySelector("#output")

let text = "=== PERSONREGISTER ===\n\n";

for (const p of allPeople) {
    text += p.getFullName() + "\n";
    text += p.getInfo() + "\n";
    text += `Hobbies: ${p.hobbies.join(", ")}\n`;
    text += `Myndig: ${p.isAdult() ? "Ja" : "Nej"}\n\n`;
}



output.textContent = text;