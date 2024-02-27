var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = "";
        this.idade = 0;
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.comer = function (comida) {
        return "O ".concat(this.nome, ", comeu ").concat(comida);
    };
    Pessoa.prototype.fezAniversario = function () {
        return "O ".concat(this.nome, ", fez atualmente ").concat(++this.idade, "."); //ou this.idade + 1;
    };
    return Pessoa;
}());
var pessoa = new Pessoa("Matheus Bugatti", 19);
console.log(pessoa.comer("Feijoada."));
console.log(pessoa.fezAniversario());
var pessoa1 = new Pessoa("Renan martinez", 45);
console.log(pessoa1.comer("doguin de carne"));
console.log(pessoa1.fezAniversario());
