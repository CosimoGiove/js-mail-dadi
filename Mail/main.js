"use strict"
/*Esercizio Dadi
2. mi creo una variabile e mi salvo il prompt.
1. attraverso un prompt chiedo all' utente il suo nome
3. mi creo un array EMAIL con all'interno le email di alcune persone che sono iscritte alla newsletter.
4. mi calcolo alttraverso .length la lunghezza del mio array.
5. utilizzo il ciclo for assegnando un valore che parte da 0  , deve avere una condizione minore o uguale  della larghezza del mio array affinchè si possa ripetere il ciclo.
6. controllo dei dati attraverso if else 
7. se l 'email utente si trova all 'interno del mio array , viene  visualizzato un messaggio sull' esito del controllo. 

## esercizio  gioco dei dadi 

1. mi creo due costanti (giocatore e computer) che devono essere uguali ad un numero randomico che vanno da 1 a 6 
2. mi creo un ciclo for.
3. inserisco una condizione if else 
4. se giocatore ha un punteggio più alto del  computer giocatore ha vinto , altrimenti vince computer.*/
const EmailInput = prompt("La tua email")
console.log(EmailInput)

const MailUtenti = ["francesco99@libero.it", "pippo99@libero.it", "andreaancora1997@hotmail.com"];
console.log(MailUtenti)

for(let i = 0 ; i < MailUtenti.length; i++ ){
    if (EmailInput === MailUtenti[i]) {
        console.log( "è corretto")
    }
    else{
        console.log("non è corretto")
    }


}


