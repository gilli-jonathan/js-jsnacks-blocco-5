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

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

//soluzione con il ciclo for

let obj = {};

for (let index = 0; index < students.length; index++) {
  const tipino = students[index];
  if (tipino.id === 2) {
    obj = tipino;
  }
}
console.log(obj);

//soluzione con il ciclo forEach

let personcina = {};

students.forEach((tipo) => {
  if (tipo.id === 2) {
    personcina = tipo;
  }
});

console.log(personcina);
