const notas = [10,10,10]

const somaNotas = notas.reduce((total, nota) => total+nota, 0)
mediaNotas = somaNotas/3

console.log(`Média: ${mediaNotas}`)
notas.forEach((nota, index) =>{
    console.log(`${++index}: ${nota}`)
})