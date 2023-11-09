/*## esercizio  gioco dei dadi 

1. mi creo due costanti (giocatore e computer) che devono essere uguali ad un numero randomico che vanno da 1 a 6 
3. inserisco una condizione if else 
4. se giocatore ha un punteggio più alto del  computer giocatore ha vinto , altrimenti vince computer.*/

const player = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log("Numero giocatore", player);

const Pc = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log("Numero pc",Pc);

if(player === Pc){
    console.log("parità palla al centro")
} else if (player < Pc){
    console.log("Il pc ha vinto mi dispiace")
} else{
    console.log("il player ha vinto")
}