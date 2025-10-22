const students = [
  {
    id: 1,
    name: "Marco Lanci",
    age: 32,
    class: "3C",
  },
  {
    id: 2,
    name: "Mario Banfi",
    age: 34,
    class: "4A",
  },
  {
    id: 3,
    name: "Luigi Banzi",
    age: 33,
    class: "5B",
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

for (let index = 0; index < students.length; index++) {
  const studente = students[index];

  if (studente.name === "Marco Lanci") {
    console.log(studente.class);
  }
}

//soluzione con il forEach

students.forEach((studente) => {
  if (studente.name === "Marco Lanci") {
    console.log(studente.class);
  }
});

//soluzione con il .find
const aula = students.find((studente) => studente.name === "Marco Lanci").class;

console.log(aula);
