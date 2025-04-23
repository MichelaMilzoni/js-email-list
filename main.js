//? DICHIARO LA COSTANTE API
const apiUrl =  `https://flynn.boolean.careers/exercises/api/random/mail`;


const generateEmail = async () => {
// async rende una funzione asincrona e garantisce la restituzione di una Promise
    //? CREO UN ARRAY DI RICHIESTE SIMULTANEE
const requests = Array.from({ length: 10 }, () =>
// Array.from x creare array di lunghezza 10
// ogni elemento dell'array è una 
//! PROMISE (array di promise)
// rappresenta una richiesta all'API per un indirizzo email 
//! Promise.all() raccoglie tutte le promesse in un'unica Promise, 
//! che viene completata (risolta) solo quando tutte le promesse individuali
//! sono completate.
    fetch(apiUrl) // ogni richiesta fetch(apiUrl), restituisce una promise
    .then(response => response.json()) // converto la risposta in .json
    .then(data => data.response) // prendo l'email dalla propietà data.response
);

    //? ESEGUO TUTTE LE RICHIESTE CONTEMPORANEAMENTE
const emailList = await Promise.all(requests);
//! Quando utilizzi await:
//! 1. il programma aspetta il completamento di tutte le richieste dell'api
//! 2. una volta risolto, emailList contiene un array con i risultati di tutte le richieste
//! NB: AWAIT PUò ESSERE UTILIZZATO SOLO DENTRO UNA FUNZIONE DICHIARATA CON ASYNC
    //? SELEZIONE DEL CONTENITORE HTML E SOSTITUZIONE DEI CONTENUTI
const emailContainer = document.getElementById('email-list');
emailContainer.innerHTML = ''; //pulisce la lista esistente
emailList.forEach((email) => {
    const listItem = document.createElement('a'); // creo un elemento a
    listItem.textContent = email; //inserisce il testo dell'email
    listItem.href = '#'; //imposta un link vuoto
    listItem.className = 'list-group-item list-group-item-action bg-dark text-secondary'; // Classi di Bootstrap
    emailContainer.appendChild(listItem); // aggiunge l'elemento al container
});

};

//? associo la funzione al bottone
document.getElementById('fetch-btn').addEventListener('click', generateEmail);
//? genero automaticamente le prime  la funzione quando la pagina è pronta email al caricamento della pagina
generateEmail()

//! PROMISE
// - gestiscono operazioni asincrone
// - è un oggetto in JavaScript che rappresenta il risultato di un'operazione asincrona.
//  Può essere:
//* Pending (in attesa): L'operazione è ancora in corso.
//* Fulfilled (completata): L'operazione è terminata con successo e la Promise restituisce un valore.
//* Rejected (rifiutata): L'operazione è fallita e la Promise restituisce un motivo per il fallimento (un errore).
// -Le Promise semplificano il modo di lavorare con funzioni asincrone, 
// rendendo il codice più leggibile 
// e meno soggetto al cosiddetto "callback hell" 
// (un effetto a cascata di funzioni annidate).

//! ESEMPIO - RICHIESTA AD UN'API (PROMISE)
// fetch('https://api.example.com/data')
//? fetch restituisce una PROMISE che rappresenta la risposta della rete
//  .then((response) => response.json()) // Trasforma la risposta in JSON
//  .then((data) => {
//    console.log(data); // Stampa i dati ricevuti
//  })
//? se la richiesta ha successo, i dati vengono gestiti con .then()
//  .catch((error) => {
//    console.error("Errore nella richiesta:", error);
//  });
//? se la richiesta fallisce l'errore viene gestito con .catch()

//! VANTAGGI (PROMISE)
// 1. chiarezza: Rendono il codice asincrono più leggibile e comprensibile.
// 2. gestione degli errori: .catch() permette di gestire i problemi in modo elegante.
// 3. concatenazione: Puoi concatenare più .then() per eseguire operazioni consecutive.

//! ASYNC
// dichiara una funzione asincrona.
// tilizzata in combinazione con AWAIT 
// gestisce operazioni asincrone in modo più leggibile e simile a codice sincrono

//! COSA FA (ASYNC)
// restituisce sempre una PROMISE (anche se dentro la funzione non c'è nulla si asincrono)
// può utilizzare AWAIT: per "aspettare che una PROMISE venga risolta"

//! PERCHè è UTILE (ASYNC)
// le funzioni asincrone sono ideali per operazioni che richiedono tempo, 
// come richieste API o temporizzatori
// con ASYNC e AWAIT si può scrivere codice che sembra sincrono ma gestisce
// operazioni asincrone

//! (ASYNC) rende una funzione asincrona e garantisce che restituisca una PROMISE
//! (AWAIT) rende il codice asincrono più simile a codice sequenziale