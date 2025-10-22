const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

//soluzione con il ciclo For
const nums_pari = [];

for (let index = 0; index < nums.length; index++) {
  const nu = nums[index];
  if (nu % 2 === 0) {
    nums_pari.push(nu);
  }
}
console.log(nums_pari);

//soluzione ciclo ForEach
const numeri_pari = [];

nums.forEach(function (numero) {
  if (numero % 2 === 0) {
    numeri_pari.push(numero);
  }
});
console.log(numeri_pari);

//soluzione con .filter

const pari = nums.filter((numerino) => {
  if (numerino % 2 === 0) {
    return true;
  }
});

console.log(pari);

//soluzione con .filter ancora più stringato:

const pari_questi_numeri = nums.filter((numb) => numb % 2 === 0);
console.log(pari_questi_numeri);
