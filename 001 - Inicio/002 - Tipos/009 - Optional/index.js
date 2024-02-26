var funcao = function (nome, idade) {
    if (!idade) {
        return "nome: ".concat(nome, ", idade: Valor n\u00E3o definido");
    }
    return "nome: ".concat(nome, ", idade: ").concat(idade);
};
console.log(funcao("Matheus", 18));
console.log(funcao("Matheus"));
