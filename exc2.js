/*
Nome: Maria Eduarda Freitas
Exercício 2 - Crie uma função que receba 3 números
como parâmetro e retorne o MENOR dentre eles.
*/
var teclado = require("prompt-sync")();
var n1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
var n2 = parseInt(teclado("Digite o segundo n\u00FAmero: "));
var n3 = parseInt(teclado("Digite o terceiro n\u00FAmero: "));
function verificacao(n1, n2, n3) {
    if (n1 < n2 && n1 < n3) {
        return n1;
    }
    else if (n2 < n1 && n2 < n3) {
        return n2;
    }
    else if (n3 < n1 && n3 < n2) {
        return n3;
    }
    else {
        return 0;
    }
}
verificacao(n1, n2, n3);
