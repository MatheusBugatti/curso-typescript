/*
    getters e setters são usados para proteger seus dados,
    especialemnte na criação de classes

    para cada instancia de uma variavel, um método getter retorna seu valor,
    enquanto o metodo setter o define ou atualiza
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
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.comer = function (comida) {
        return "O ".concat(this.nome, ", comeu ").concat(comida, " e estava muito boa");
    };
    Pessoa.prototype.fezAniversario = function () {
        return "O ".concat(this.nome, ", fez atualmente ").concat(++this.idade, " anos de idade."); //ou this.idade + 1;
    };
    return Pessoa;
}());
//herda os dados da outra class para uma nova
var Matheus = /** @class */ (function (_super) {
    __extends(Matheus, _super);
    function Matheus() {
        var _this = _super.call(this, "Matheus", 19) || this;
        _this._profissao = "Programador";
        return _this;
    }
    Object.defineProperty(Matheus.prototype, "profissao", {
        //puxa o que está dentro de profissao
        get: function () {
            //funçao, validar, se contem caracteres especiais
            if (this._profissao === "Piloto de Avião") {
                return "Ele n\u00E3o \u00E9 mais um programador, agora \u00E9 um ".concat(this._profissao);
            }
            return this._profissao;
        },
        //pode setar um novo valor
        set: function (valor) {
            this._profissao = valor;
        },
        enumerable: false,
        configurable: true
    });
    Matheus.prototype.Profissao = function () {
        return "O ".concat(this.nome, " atualmente est\u00E1 trabalhando como ").concat(this._profissao);
    };
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
var matheus = new Matheus();
//const joao = new Joao ("João ribeiro", 55);
console.log(matheus.Profissao());
//alterando o valor do com set
matheus.profissao = "Piloto de Avião", 25;
console.log(matheus.profissao);
