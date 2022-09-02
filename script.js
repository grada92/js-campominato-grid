/*Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
se il numero progressivo è pari, di verde se dispari. Inoltre emette 
un messaggio in console con il numero della cella cliccata.
*/

console.log('JS OK');

// Collego button 
const button = document.getElementById('button-grid');

button.addEventListener('click', function(){
    console.log('mi hai cliccato');
    // collego elemento alla griglia

    const addgrid = document.getElementById('grid');
    addgrid.innerHTML = '';

    // Creo celle con numero progressivo da 1 a 100
    for( let i = 1; i <= 100; i++) {
        const addElement = document.createElement('div');      
        addElement.className = 'cell';
        addElement.innerHTML = i ; // inserisco numeri creati
        grid.append(addElement);


    }





})
