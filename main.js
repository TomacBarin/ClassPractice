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
// console.log(person1.getInfo());
// console.log(person2.getInfo());
// console.log(person3.getInfo());

// Logga getInfo(), mer avancerat fast stilrent:
const allPeople = [person1, person2, person3];
allPeople.forEach(p => console.log(p.getInfo()));

// Printa i DOM:en
const output = document.querySelector("#output")

let text = "=== PERSONREGISTER ===\n\n";

for (const p of allPeople) {
    text += p.getFullName() + "\n";
    text += p.getInfo() + "\n";
    text += `Hobbies: ${p.hobbies.join(", ")}\n`;
    text += `Myndig: ${p.isAdult() ? "Ja" : "Nej"}\n\n`;
}

// Överkurs / Avancerad: Aktiva och myndiga personer
const aktivaMyndiga = allPeople.filter(person => person.isActive && person.isAdult());

let aktivMyndigText = "\n=== AKTIVA OCH MYNDIGA ===\n\n";
if (aktivaMyndiga.length === 0) {
    aktivMyndigText += "Ingen är både aktiv och myndig just nu.\n";
} else {
    for (const p of aktivaMyndiga) {
        aktivMyndigText += `${p.getFullName()} (${p.age} år)\n`;
        aktivMyndigText += `${p.getInfo()}\n\n`;
    }
}

// Överkurs / Avancerad: Hämtar alla med viss roll
function showPersonsWithRole(role) {
    const match = allPeople.filter(p => p.meta.role === role);

    let result = `\n=== PERSONER MED ROLLEN "${role.toUpperCase()}" ===\n\n`;
    if (match.length === 0) {
        result += `Ingen har rollen "${role}".\n`;
    } else {
        for (const p of match) {
            result += p.getFullName() + "\n";
            result += p.getInfo() + "\n\n";
        }
    }
    return result;
}

// Överkurs: Lägger till allt i <pre>
text += aktivMyndigText;
text += showPersonsWithRole("student");
text += showPersonsWithRole("lärare");

output.textContent = text;