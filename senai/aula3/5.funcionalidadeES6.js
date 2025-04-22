//criando um vetor de objetos
const usuarios = [
    {nome: 'Marta', idade: 32},
    {nome: 'José', idade: 35},
    {nome: 'Carla', idade: 25}
]

//filtrar idade maior que 30
//console.log(idadeMaiorQue30)
const idadeMaiorQue30 = usuarios.filter(usuario => usuario.idade > 30)
idadeMaiorQue30.forEach(usuario =>{
    console.log(`nome: ${usuario.nome}, idade: ${usuario.idade}`)
})

//encontrar um usuário específico
const usuarioEncontrado = usuarios.find(usuario => usuario.nome === "Marta")
//devolve um objeto
console.log("\n");
console.log(usuarioEncontrado) //resposta como objeto
console.log(`Nome: ${usuarioEncontrado.nome}, idade: ${usuarioEncontrado.idade}`)

//buscar em uma lista apenas nomes
const apenasNomes = usuarios.map(usuario => usuario.nome)
apenasNomes.forEach(nome => console.log(nome))

console.log("\nLista com nomes de usuários - numerado");
apenasNomes.forEach((nome, index) => console.log(`${++index}: ${nome}`))

// i=1
// console.log(i++)
// i=1
// console.log(++i)

//somando todas as idades
console.log("\nSoma de todas as idades")
const somaIdades = usuarios.reduce((total, usuario) => total + usuario.idade, 0)
console.log(`Soma das idades: ${somaIdades}`)

//transformar elementos
const numeros = [2,4,6,8,9]

console.log("\nOperações de multiplicação - dobrar valor")
const numerosDobrados = numeros.map(numero => numero*2)
console.log(numeros)
console.log(numerosDobrados)

console.log("\nFiltrando números pares")
const pares = numeros.filter(numero => numero %2 === 0)
console.log(pares)

console.log('\nSomando todos os números')
const total = numeros.reduce((soma, atual) => soma+atual, 0)
console.log(total)