const error = (): never => {
    throw new Error ("Algo deu Errado");
};

console.log(error());

