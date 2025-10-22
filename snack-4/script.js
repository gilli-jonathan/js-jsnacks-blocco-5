const posts = [
  { author: "Marco", date: "12/3/2021", content: "lorem ipsum..." },
  { author: "Luca", date: "30/6/2021", content: "lorem ipsum..." },
  { author: "Fabrizio", date: "12/9/2020", content: "lorem ipsum..." },
  { author: "Enrico", date: "09/12/2021", content: "lorem ipsum..." },
  {
    author: "Jonathan il Grande",
    date: "11/09/2001",
    content: "lorem ipsum...",
  },
];

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

const nomi_autori = [];
//soluzione con il ciclo for
for (let index = 0; index < posts.length; index++) {
  const autore = posts[index];
  nomi_autori.push(autore.author);
}
console.log(nomi_autori);

const poetori = [];
//soluzione con il ciclo forEach
posts.forEach(function (man) {
  poetori.push(man.author);
});
console.log(poetori);

//solizione con .map
const scrittori = posts.map((tizio) => tizio.author);
console.log(scrittori);
