let precos = [10, 25, 7, 90, 30];

let maisCaro = precos[0]
let indice = 0

for (let i = 1; i < precos.length; i++) {
  if (precos[i] > maisCaro) {
    maisCaro = precos[i]
    indice = i
  }
}

console.log("Índice do produto mais caro:", indice)
console.log("Preço do produto mais caro:", maisCaro)
