/*
    As interfaces TypeScript definem os contratos do seu codigo.
    Eles tambem fornecem nomes explicitos para verificação de tipo.
*/ 


//Interface
interface IPessoa{
    nome: string,
    idade: number,
    readonly cpf: number
}

    const pessoa: IPessoa = {
        nome: "Matheus", 
        idade: 21, 
        cpf:22222222};


class Joao implements IPessoa{
    nome: string = "João"
    idade: number = 25
    readonly cpf: number = 22222222;
}