/*
    A palavra chave static define uym metodo estátistico para uma classe.
    Métodos estatisticos não são chamados na instâncias da classse.
    Em vez disso, eles são chamados na propria classe.
    Geralmente, são funçõe utilitarias, como funções para criar ou clonar objetos.
*/
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.cloneObj = function (object) {
        return JSON.parse(JSON.stringify(Object.assign(object)));
    };
    return Utils;
}());
var tenis1 = {
    tamanho: 41,
    estoque: true,
};
var tenis2 = {
    tamanho: 41,
    estoque: true,
};
console.log(Utils.cloneObj([tenis1, tenis2]));
