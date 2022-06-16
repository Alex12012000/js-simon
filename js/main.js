// Mostro all'utente 5 numeri casuali
const randomNumb = numbGenerator(5, 1, 50);
console.log(randomNumb)
alert('Ricordati questi numeri! ' + randomNumb);
// Numeri inseriti dall'utente
let userInputs = [];
// Numeri indovinati
let guessNumb = [];


// Aspetto 30 secondi e chiedo all'utente di inserire i numeri che ha visto precedentemente
setTimeout(() => {

    // Finche i numeri inseriti dall'utente non saranno tanti quanti i numeri generati random
    // continuo a chiedere numeri all'utente
    while(userInputs.length < randomNumb.length ) {
        const userNumb = prompt('Inserisci uno alla volta i numeri visti in precedenza')
        let userNumbAsNumb = parseInt(userNumb);
        // Se il numero non è nan lo inserisco nell'array di numeri inseriti dal giocatore, altrimenti richiedo
        if(!isNaN(userNumbAsNumb)) {
            userInputs.push(userNumbAsNumb);
        }
    }

    // Se i numeri inseriti dall'utente sono giusti li inserisco nell'array di numeri indovinati
    for( let i = 0; i < userInputs.length; i++){
        let singleInput = userInputs[i];

        if (randomNumb.includes(singleInput)){
            guessNumb.push(singleInput);
        }   
    }

    // Messaggio finale con punteggio per l'utente
    alert('Hai indovinato ' + guessNumb.length + ' numeri. E sono ' + ''+ guessNumb.join(', '));


}, 30000)














//  Genero numeri casuali
// ------------------------
//      FUNZIONI
// -----------------------

// Funzione che genera 16 bombe con un numero che va da un minimo di 1 fino ad un massimo indicato dalla difficoltà scelta dall'utente

function numbGenerator (bombNumb, max, min) {

    // array di bombe
    let numb = [];

    // finche il numero di bombe nell'array è minore del numero massimo di bombe da generare, continua a generare numeri random
    // che verranno pushati all'interno dell'array di bombe
    while (numb.length < bombNumb) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
        
        // se il numero non è incluso nell'array di bombe lo inserisco, altrimenti continuo a chiedere un numero
        if(!numb.includes(randomNumber)) {
            numb.push(randomNumber);
        }
    }

    // Ritorna un array
    return numb;
}







// Al termine mostro all'utente quanti e quali numeri ha indovinato

