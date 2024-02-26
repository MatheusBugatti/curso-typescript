let pedido: string = "Pizza";
pedido = "Matheus Bugatti";

let numero: number = 123;
numero = 123456;

let deuBom: boolean = true;
deuBom = true;

const fun = (value: string | number | boolean) => {
    return value;
    
};

// const fun = (value : string ): string =>{
//     return value;
// }

console.log(fun("o renan é careca mas é foda"));
console.log(fun (123));
console.log(fun (false));




