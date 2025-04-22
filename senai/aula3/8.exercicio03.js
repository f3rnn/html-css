const numeros = [1,2,3,4,5,6]

const pares = numeros.filter(numero => numero %2 === 0)
console.log(pares.length)
console.log(pares)

const impares = numeros.filter(numero => numero %2 != 0)
console.log(impares.length)
console.log(impares)