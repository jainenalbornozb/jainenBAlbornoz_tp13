let numeros1 = [5500, 10000, -15000, 45000];
let numeros2 = [2000, 3000, -500, -300];
let numeros3 = [1500, -700, -300, 600];

function calculateBalances (operaciones){
    let saldoDeposito = 0;
    let saldoRetiro = 0;

for(let i= 0; i < operaciones.length ; i++){
    if (operaciones[i] > 0) {
        saldoDeposito += operaciones[i];
} else {
    saldoRetiro += operaciones[i];
}
}

let saldoActual = saldoDeposito + saldoRetiro;

return {
    saldoDeposito: saldoDeposito,
    saldoRetiro: saldoRetiro,
    saldoActual: saldoActual
}
}

function bankBalance (nombre, apellido, operaciones){
    let balances = calculateBalances(operaciones);

    return {
        nombre: nombre,
        apellido: apellido,
        saldoDeposito: balances.saldoDeposito,
        saldoRetiro: balances.saldoRetiro,
        saldoActual: balances.saldoActual
    };
}
// let resultado1 = bankBalance("Gloria", "Medina", numeros1);
// console.log(`Estimada ${resultado1.nombre} ${resultado1.apellido}:
// El monto total de los depósitos es de: $${resultado1.saldoDeposito}.
// El monto total de los retiros es de: $${Math.abs(resultado1.saldoRetiro)}.
// Por lo tanto, su saldo actual en la cuenta es de: $${resultado1.saldoActual}.\n`);

// let resultado2 = bankBalance("Carlos", "Pérez", numeros2);
// console.log(`Estimado ${resultado2.nombre} ${resultado2.apellido}:
// El monto total de los depósitos es de: $${resultado2.saldoDeposito}.
// El monto total de los retiros es de: $${Math.abs(resultado2.saldoRetiro)}.
// Por lo tanto, su saldo actual en la cuenta es de: $${resultado2.saldoActual}.\n`);

// let resultado3 = bankBalance("Ana", "López", numeros3);
// console.log(`Estimada ${resultado3.nombre} ${resultado3.apellido}:
// El monto total de los depósitos es de: $${resultado3.saldoDeposito}.
// El monto total de los retiros es de: $${Math.abs(resultado3.saldoRetiro)}.
// Por lo tanto, su saldo actual en la cuenta es de: $${resultado3.saldoActual}.`);

module.exports = bankBalance