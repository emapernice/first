console.log(saldosMecesGanancia([2, 10, -20]));
function saldosMecesGanancia(unPeriodo) {
    let saldos = [];
    for (let i = 0; i < unPeriodo.length; i++) {
        if (unPeriodo[i] > 0) {
            saldos.push(unPeriodo[i]);
        }     
    }
    return saldos;
    console.log();
}
