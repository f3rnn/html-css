// criar arrow function
const somar =  (a,b) =>{
    return a + b
}

const subtrair = (a,b) => a-b

const multiplicar = (a,b) =>{
    return a*b
}

const dividir = (a,b) => a/b

//chamando funcao
const soma = somar(2,3)
const subtracao = subtrair(2,3)
const divisao = dividir(2,3)
const multiplicacao = multiplicar(2,3)

// exibir

console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);