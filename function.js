var min = Math.ceil(1); //La funzione Math.ceil() ritorna il più piccolo intero più grande o uguale al numero dato.
var max = Math.floor(6);//La funzione Math.floor() restituisce il numero intero, arrotondato per difetto, del numero dato.


var player1 = Math.floor(Math.random() * (max - min + 1)) + min;
var player2 = Math.floor(Math.random() * (max - min + 1)) + min;

document.getElementById('playeruno').innerHTML = player1;
document.getElementById('playerdue').innerHTML = player2;

if (player1 > player2) {
    document.getElementById('winner').innerHTML = 'Player1';
} else if (player1 == player2) {
    document.getElementById('winner').innerHTML = 'pareggio';
} else {
    document.getElementById('winner').innerHTML = 'Player2';
}
