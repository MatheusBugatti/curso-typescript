"use strict";
/*
    Os namespaces são uma forma especifica de TypeScript para organizar o codigo.
    Namespaces são simplesmente objetos do javaScript nomeados no namespace global.
    Isso, Torna os namespaces uma consttução muito simples de usar.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1_1 = require("./pessoa-1");
console.log(pessoa_1_1.Pessoa1.nome);
console.log(pessoa_1_1.Pessoa1.calc());
