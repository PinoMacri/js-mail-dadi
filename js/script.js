/*
ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
*/

const contenitore = document.getElementById("contenitore")
const giocatore = document.getElementById("giocatore")
const computer = document.getElementById("computer")
const risultato = document.getElementById("risultato")
const gioca = document.getElementById("gioca")

gioca.addEventListener("click", function () {
    for (let i = 1; i <= 6; i++) {
        const random = Math.random();
        const min = 1;
        const max = 6;
        let result = Math.floor(random * (max + 1 - min)) + min;
        giocatore.innerText = result

        for (let i = 1; i <= 6; i++) {
            const random = Math.random();
            const min = 1;
            const max = 6;
            let resultDue = Math.floor(random * (max + 1 - min)) + min;
            computer.innerText = resultDue
        
        if (result > resultDue) {
            risultato.innerText = "Hai Vinto la partita !!!!"
        }
        else {
            risultato.innerText = "Ritenta, sarai più fortunato la prossima volta !!!!"
        }
    }
    }
}
)