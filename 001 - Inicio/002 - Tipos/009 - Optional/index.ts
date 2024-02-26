const funcao = (nome: string, idade?: number) => {
    if(!idade) {
        return `nome: ${nome}, idade: Valor não definido`;    
    }

    return `nome: ${nome}, idade: ${idade}`;
}

console.log(funcao("Matheus", 18));
console.log(funcao("Matheus"));
