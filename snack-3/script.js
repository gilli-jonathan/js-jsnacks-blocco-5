const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

const numeri_aumentati = [];
//soluzione con il ciclo for
for (let index = 0; index < numbers.length; index++) {
  const num = numbers[index];
  numeri_aumentati.push(num + 1);
}
console.log(numeri_aumentati);

const numeri_grossi = [];
//soluzione con il ciclo for
numbers.forEach(function (numb) {
  numeri_grossi.push(numb + 1);
});

console.log(numeri_grossi);

//solizione con .map
const numeri_numerosi = numbers.map((numero) => numero + 1);
console.log(numeri_numerosi);
