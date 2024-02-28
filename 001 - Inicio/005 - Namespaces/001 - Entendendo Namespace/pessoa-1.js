"use strict";
/*
    Os namespaces são uma forma especifica de TypeScript para organizar o codigo.
    Namespaces são simplesmente objetos do javaScript nomeados no namespace global.
    Isso, Torna os namespaces uma consttução muito simples de usar.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa1 = void 0;
var Pessoa1;
(function (Pessoa1) {
    Pessoa1.nome = "Joao";
    Pessoa1.calc = function () {
        return 1 + 1;
    };
})(Pessoa1 || (exports.Pessoa1 = Pessoa1 = {}));
console.log(Pessoa1.nome);
console.log(Pessoa1.calc());
