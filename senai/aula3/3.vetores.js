const frutas = ['Maçã', 'Banana', 'Laranja']
console.log(frutas);

//acessar elementos específicos
console.log(frutas[0]);

//adicionando elementos
frutas.push('Uvas')
console.log(frutas);

//remover elemento
frutas.pop() //remove último elemento do vetor
console.log(frutas);

frutas.splice(1,1) //remove apenas o segundo elemento do vetor
console.log(frutas);

//percorrendo vetor
frutas.forEach((fruta, index)=>{
    console.log(`${index}: ${fruta}`);
})