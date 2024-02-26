let array1: [string, string, number] = ["Matheus Bugatti" , "Joao", 123];


let array2: Array<string | number> =  
[123, "Matheus Bugatti" , "Joaozin joaquin"];

console.log(array1);
console.log(array2);

let obj: {nome: string; sobrenome: string; idade: number, deuBom: boolean} = {
    nome: "Matheus",
    sobrenome:"Bugatti",
    idade: 19,
    deuBom: true,
};

let obj2 : Array<{
    nome: string,
    sobrenome: string,
    idade: number,
    deuBom: boolean
}> = [
    {
    nome: "Matheus2",
    sobrenome:"Bugatti5",
    idade: 125,
    deuBom: true,
},
];


console.log(obj);
console.log(obj2);

