/*
    classes, métodos e campos no typescript podem ser abstratos

    um metodo abstrato ou campo abstrato é aquele que não teve uma
    implementação fornecida

    O papel das classes abstratas é servir como uma classe base para subclasses
    que implementam todos os membros abstratos

    quando uma classe não possui membros abstratos, ela é chamada se concreta.
*/

abstract class Pessoa {
    protected nome : string = "";
    protected idade: number = 0;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
    public comer(comida: string){

    }
    public fezAniversario(){

    }

    protected abstract profissao: string;
    public abstract qualSuaProfissao(): string;
    public abstract qualSeuSalario(salario:number): number;
}

    class Maria extends Pessoa {
        protected profissao: string = "Programadora"

        constructor() {
            super("Maria",18);
        }

        public qualSuaProfissao(): string{
            return `Sua profissão é ${this.profissao}`;
        }

        public qualSeuSalario(salario: number): number {
            return salario;    
        }
    
    }


    class Joao extends Pessoa {
        protected profissao: string = "Programador"
        
        constructor() {
            super("Maria",18);
        }

        public qualSuaProfissao(): string{
            return `Sua profissão é ${this.profissao}`;
        }

        public qualSeuSalario(salario: number): number {
            return salario;    
        }
    }

const maria = new Maria();
const joao = new Joao();

console.log(maria.comer("Feijuca"));
