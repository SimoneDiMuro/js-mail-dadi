/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto */

const numberPc = Math.floor(Math.random() * 6) + 1;
const numberPlayer = Math.floor(Math.random() * 6) + 1;

console.log(numberPc, numberPlayer)

if (numberPc < numberPlayer){
    console.log("Il vincitore è l'umano")
}

else if (numberPc > numberPlayer){
    console.log("Il vincitore è il PC")
}

else {
    console.log("Siete pari")
}