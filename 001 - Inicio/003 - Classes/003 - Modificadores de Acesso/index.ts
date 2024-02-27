/*
public - Pode ser acessado tanto pela mesma classe, classes filhas
ou outras classes.

protected -  Pode ser acessado pela mesma classe e classes filhas,
não pode ser acessado por outras classes.

private - Pode ser acessada somente pela propria classe.
*/

class Pessoa {
    public nome: string = "";
    public idade: number = 0;
    
    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string){
        return `O ${this.nome}, comeu ${comida}`;
    }

    public fezAniversario(){
        return `O ${this.nome}, fez atualmente ${++this.idade}.`; //ou this.idade + 1;
    }
}

const pessoa = new Pessoa ("Math", 19);