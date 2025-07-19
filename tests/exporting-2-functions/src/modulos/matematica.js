let soma = function(a, b) {
    return parseFloat(a) + parseFloat(b);
}

let subtracao = function(a, b) {
    return parseFloat(a) - parseFloat(b);
}

module.exports = {
    soma: soma, 
    subtracao: subtracao
};