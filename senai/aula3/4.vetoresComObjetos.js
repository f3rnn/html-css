//criando um vetor de objetos
const usuarios = [
    {nome: 'Marta', idade: 30},
    {nome: 'José', idade: 35},
    {nome: 'Carla', idade: 25}
]

//exibindo
//console.log(usuarios)

//percorrendo vetor
usuarios.forEach(usuario => {
    console.log(`Nome: ${usuario.nome}\nIdade: ${usuario.idade}\n`)
})