let vitoria = ("120")
let derrota = ("10")

function calcularNivel (vitorias, derrotas){
    const saldoVitorias = vitoria - derrota;

    let nivel;

if (saldoVitorias < 10) {
    nivel = "ferro"
}
else if (saldoVitorias >= 11 && saldoVitorias <=20) {
    nivel = "bronze"
}
else if (saldoVitorias >= 21 && saldoVitorias <=50) {
    nivel = "prata"
}
else if (saldoVitorias >= 51 && saldoVitorias <=80) {
    nivel = "ouro"
}
else if (saldoVitorias >= 81 && saldoVitorias <=90) {
    nivel = "diamante"
}
else if (saldoVitorias >= 91 && saldoVitorias <=100) {
    nivel = "lendario"
}
else if (saldoVitorias >= 101) {
    nivel = "Imortal"
}

return (" O herói tem um saldo de " + saldoVitorias + " e está no nível " + nivel)
}

let resultado = calcularNivel(vitoria, derrota)
console.log(resultado)