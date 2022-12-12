//^ -------------------------------------------ESERCIZIO 1-----------------------------------------------------------
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
            else if (resultDue > result) {
                risultato.innerText = "Ritenta, sarai più fortunato la prossima volta !!!!"
            }
            else if (result = resultDue) {
                risultato.innerText = "Che coincidenza incredibile, Pareggio !!!!"
            }
        }
    }
}
)
//^ -------------------------------------------ESERCIZIO 2-----------------------------------------------------------
/*
ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

const email = ["carlo@hotmail.it", "giovanni@hotmail.it", "pietro@hotmail.it", "paolo@hotmail.it"]

controllo.addEventListener("click", function () {
    let inserimento = document.getElementById("inserimento")
    let definitive = inserimento.value
    const controllo = document.getElementById("controllo")
    const risultatoForm = document.getElementById("risultatoForm")

    if (definitive === email[0] ) {
        risultatoForm.innerText = "Complimenti, la tua email ha superato il controllo e può accedere al magico mondo di Boolean!"
    }
    else if (definitive === email[1] ) {
        risultatoForm.innerText = "Complimenti, la tua email ha superato il controllo e può accedere al magico mondo di Boolean!"
    }
    else if (definitive === email[2] ) {
        risultatoForm.innerText = "Complimenti, la tua email ha superato il controllo e può accedere al magico mondo di Boolean!"
    }
    else if (definitive === email[3] ) {
        risultatoForm.innerText = "Complimenti, la tua email ha superato il controllo e può accedere al magico mondo di Boolean!"
    }
    else  {
        risultatoForm.innerText = "Ci dispiace, la tua email sembra che non faccia parte della lista!"
    }

})