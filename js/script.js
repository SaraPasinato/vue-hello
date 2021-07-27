/* 
   *Inizializzare Vue e stampare a schermo un messaggio all’interno di un h1,
   *utilizzando le properietà di Vue presenti in data.
   ?Bonus
     ?Aggiungere alla pagina un’immagine, la cui sorgente derivi anch'essa dai data di Vue.
   
*/
console.log("HERE",Vue);

Vue.config.devtools=true;



const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      source: 'https://picsum.photos/200/300'
    }
  })