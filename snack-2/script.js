const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

//Soluzione con il ciclo For

for (let index = 0; index < people.length; index++) {
  const person = people[index];
  console.log(person.name);
}

//Soluzione con il ciclo ForEach
people.forEach((person) => {
  console.log(person.name);
});
