/*
    Os namespaces são uma forma especifica de TypeScript para organizar o codigo.
    Namespaces são simplesmente objetos do javaScript nomeados no namespace global.
    Isso, Torna os namespaces uma consttução muito simples de usar.
*/

import { Pessoa, Pessoa1 } from "./module";

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());

console.log(Pessoa.Gabriel.nome);
console.log(Pessoa.Matheus.nome);


