//Task di oggi: Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Bonus: Invece di generare il numero random per l'utente, chiedilo con un prompt!

//Variabili di contenimento
const list_number = [1, 2, 3, 4, 5, 6];
let condition_op = true;
let result_player = 0;
let result_computer = 0;
let window_msg = '';

//Ciclo di esecuzione sul relativo gioco da completare tra il computer e l'utente

window_msg = window.confirm('Sei pronto per iniziare?, Le regole sono semplici per 10 tentativi, giocherai contro il CPU al gioco dei dadi. Buona fortuna!!');

for (let index = 0; index < 10; index++) {
    result_computer = Math.floor(Math.random() * 6) + 1;
    result_player = Math.floor(Math.random() * 6) + 1;
    if (result_player <= result_computer) {
        condition_op = true;
    } else{
        condition_op = false;
    }

    if (condition_op === true) {
        window_msg = window.alert('Hai vinto tu, premi ok per riprovare.');
        console.log('Classifica:', `You:${result_player} || CPU:${result_computer}`);
    } else{
        window_msg = window.alert('Ha vinto il computer, premi ok per riprovare.');
        console.log('Classifica:', `You:${result_player} || CPU:${result_computer}`);
    }
}

//Messaggio finale del gioco all'utente
console.log('Bene sei riuscito a completare questa sfida, grazie mille per aver giocato.');
window.alert('Bene sei riuscito a completare questa sfida, grazie mille per aver giocato.');
