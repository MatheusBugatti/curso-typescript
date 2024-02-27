class Pessoa {
    nome: string = "";
    idade: number = 0;
    
    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    comer(comida: string){
        return `O ${this.nome}, comeu ${comida}`;
    }

    fezAniversario(){
        return `O ${this.nome}, fez atualmente ${++this.idade}.`; //ou this.idade + 1;
    }
}
const pessoa = new Pessoa("Matheus Bugatti", 19);

console.log(pessoa.comer("Feijoada."));
console.log(pessoa.fezAniversario());


const pessoa1 = new Pessoa("Renan martinez", 45);

console.log(pessoa1.comer("doguin de carne"));
console.log(pessoa1.fezAniversario());
