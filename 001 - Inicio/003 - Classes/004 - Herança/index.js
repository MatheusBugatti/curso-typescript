/*
public - Pode ser acessado tanto pela mesma classe, classes filhas
ou outras classes.

protected -  Pode ser acessado pela mesma classe e classes filhas,
não pode ser acessado por outras classes.

private - Pode ser acessada somente pela propria classe.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = "";
        this.idade = 0;
        //criando a a informação da profissão
        this.profissao = "Programador";
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.comer = function (comida) {
        return "O ".concat(this.nome, ", comeu ").concat(comida, " e estava muito boa");
    };
    Pessoa.prototype.fezAniversario = function () {
        return "O ".concat(this.nome, ", fez atualmente ").concat(++this.idade, " anos de idade."); //ou this.idade + 1;
    };
    //pegando a informação com getProfissão
    Pessoa.prototype.getProfissao = function () {
        return "O ".concat(this.nome, " trabalha como ").concat(this.profissao);
    };
    return Pessoa;
}());
//herda os dados da outra class para uma nova
var Matheus = /** @class */ (function (_super) {
    __extends(Matheus, _super);
    function Matheus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Matheus;
}(Pessoa));
var Joao = /** @class */ (function (_super) {
    __extends(Joao, _super);
    function Joao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Joao;
}(Pessoa));
//passa as informações para a class
var matheus = new Matheus("matheus", 20);
var joao = new Joao("João ribeiro", 55);
//exibe
console.log(matheus.fezAniversario());
console.log(joao.comer("Feijoada"));
console.log(matheus.getProfissao());
