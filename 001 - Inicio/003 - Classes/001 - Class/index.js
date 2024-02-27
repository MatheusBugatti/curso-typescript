/*
Uma classe typescript é uma estrutura de programação orientada
ao objeto que possui um conjunto de propriedade e métodos

Uma classe é um modelo para criar objetos, permitindo que vc defina
uma estrutura com propriedades e comportamentos
*/
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome,
            this.idade = idade;
    }
    return Pessoa;
}());
var pessoa1 = new Pessoa("Matheus Bugatti", 19);
console.log(pessoa1);
