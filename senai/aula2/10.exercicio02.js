const idade = 18

if(idade < 16){
    console.log("não pode votar")
}else if(idade <= 17){
    console.log("voto opcional")
}else if(idade >= 65){
    console.log("voto não obrigatório")
}else{
    console.log("voto obrigatório")
}