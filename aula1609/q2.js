let tipos = []

for (let i = 0; i < 10; i++) {
  let tipo = prompt("Digite o tipo sanguíneo da pessoa " + i + ":")
  tipos.push(tipo)
}

for (let i = 0; i < tipos.length; i++) 
  console.log("Pessoa " + i + " - Tipo sanguíneo: " + tipos[i])
