enum Mes{
    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Março",
}

const pessoa : {nome: string , mesAniver: string} = {
    nome: "Denner",
    mesAniver: Mes.MAR,
};
if (pessoa.mesAniver === Mes.MAR) {
    console.log(pessoa);
    
}


