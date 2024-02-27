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
        return `O ${this.nome}, comeu ${comida} e estava muito boa`;
    }

    public fezAniversario(){
        return `O ${this.nome}, fez atualmente ${++this.idade} anos de idade.`; //ou this.idade + 1;
    }

    //Outra forma de fazer

    //criando a a informação da profissão
    private profissao: string = "Programador";
    //pegando a informação com getProfissão
    public getProfissao(){
        return`O ${this.nome} trabalha como ${this.profissao}`;
    }
}

//herda os dados da outra class para uma nova
class Matheus extends Pessoa{}
class Joao extends Pessoa{}


//passa as informações para a class
const matheus = new Matheus("matheus",20);
const joao = new Joao ("João ribeiro", 55);


//exibe
console.log(matheus.fezAniversario());
console.log(joao.comer("Feijoada"));
console.log(matheus.getProfissao());


