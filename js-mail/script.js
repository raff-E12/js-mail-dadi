//Task di oggi: Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.

//Nota Importante: Non è necessario provvedere alla validazione delle email

//Lista di email degli invitati
const list_inv = [
    "mario.rossi@example.com",
    "luca.bianchi@example.com",
    "anna.verdi@example.com",
    "giulia.neri@example.com"
];

//Interazione del utente in questione
let window_message_email = window.prompt('Quale la tua email in questione di preciso?', '');
let invite_condition = false;

//Ciclo di Verifica sulla lista delle email
for (let index = 0; index < list_inv.length; index++) {
    if (list_inv[index] === window_message_email) {
        invite_condition = true;
        break;
    }
}

//Condizione di verifica e di conferma
if (invite_condition) {
    const presentation_list = 'Ecco la lista degli invitati con le loro email: ' + list_inv.join('-');
    window.confirm('Ottimo, fai parte della lista degli invitati.');
    console.log(presentation_list);
} else {
    window.confirm('Non fai parte della lista degli invitati.');
    console.log('Ricarica la pagina e riprova a vedere se sei fortunato.')
}