/*
    A palavra chave static define uym metodo estátistico para uma classe.
    Métodos estatisticos não são chamados na instâncias da classse.
    Em vez disso, eles são chamados na propria classe.
    Geralmente, são funçõe utilitarias, como funções para criar ou clonar objetos.
*/

class Utils{
    static cloneObj(object: Array<{}>){
         return JSON.parse(JSON.stringify(Object.assign(object)));

    }
}

const tenis1: { tamanho: number; estoque: boolean } = {
    tamanho:41,
    estoque:true,
};

const tenis2: { tamanho: number; estoque: boolean } = {
    tamanho:41,
    estoque:true,
};

console.log(Utils.cloneObj([tenis1, tenis2]));

