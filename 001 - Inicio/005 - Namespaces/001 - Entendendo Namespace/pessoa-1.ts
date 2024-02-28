/*
    Os namespaces são uma forma especifica de TypeScript para organizar o codigo.
    Namespaces são simplesmente objetos do javaScript nomeados no namespace global.
    Isso, Torna os namespaces uma consttução muito simples de usar.
*/

export namespace Pessoa1{
    export let  nome = "Joao";

    export let calc = () => {
        return 1 + 1;
    }
}

