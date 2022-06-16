// Mostro all'utente 5 numeri casuali
const randomNumb = numbGenerator(5, 1, 50);
const guessNumb = [];
alert(randomNumb);



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

