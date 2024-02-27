/*
    getters e setters são usados para proteger seus dados, 
    especialemnte na criação de classes

    para cada instancia de uma variavel, um método getter retorna seu valor,
    enquanto o metodo setter o define ou atualiza
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
    // private _profissao: string = "Programador";
    // //pegando a informação com getProfissão
    // public getProfissao(){
    //     return`O ${this.nome} trabalha como ${this.profissao}`;
    // }
}

//herda os dados da outra class para uma nova
class Matheus extends Pessoa{
    private _profissao: string = "Programador";

    constructor(){
        super("Matheus", 19);
    }

    //puxa o que está dentro de profissao
    get profissao(){
        //funçao, validar, se contem caracteres especiais
        if(this._profissao === "Piloto de Avião"){
            return `Ele não é mais um programador, agora é um ${this._profissao}`;
        }
        return this._profissao;
    }

    //pode setar um novo valor
    set profissao(valor: string){
        this._profissao = valor;
    }
    
    public Profissao(){
       return `O ${this.nome} atualmente está trabalhando como ${this._profissao}`;
    }

}

class Joao extends Pessoa{}

//passa as informações para a class
const matheus = new Matheus();

//const joao = new Joao ("João ribeiro", 55);

console.log(matheus.Profissao());

//alterando o valor do com set
matheus.profissao = "Piloto de Avião", 25;
console.log(matheus.profissao);


