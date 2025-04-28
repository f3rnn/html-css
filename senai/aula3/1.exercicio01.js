const numeros = [-1,-2,3,4,5]

const numNegativos = numeros.filter(numero => numero < 0).length
const numPositivos = numeros.filter(numero => numero > 0).reduce((total, num) => total+num,0)

console.log(`soma dos valores positivos: ${numPositivos}`)
console.log(`quantidade dos valores negativos: ${numNegativos}`)