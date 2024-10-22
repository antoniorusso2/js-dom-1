//variabile con lampadina da accendere e spegnere scambiandola tra 2 immagini
//variabile del pulsante da premere per accendere e spegnere la lampadina

const bulbOn = document.getElementById('on-bulb');//elemento img contenuto in html
// console.log(bulbOn.innerText);

const bulbOff = document.getElementById('off-bulb');//elemento img contenuto in html

const button = document.getElementById("on-off");//bottone per l'accensione e spegnimento

//event listener per cambiare l'immagine e la scritta inserita all'interno del bottone
button.addEventListener('click', function () {
  //al click del bottone viene inserita e rimossa con 'toggle' la classe hidden alle immagini in html cosi da rendere ativo o meno il display none
  bulbOn.classList.toggle('hidden');
  bulbOff.classList.toggle('hidden');

  if (bulbOn.classList.contains('hidden')) {
    button.innerHTML = 'Accendi la lampadina';
  } else {
    button.innerHTML = 'Spegni la lampadina';
  }
});


// event listener per cambiare l'immagine e la scritta inserita all'interno del bottone
//versione senza toggle con condizione e verifica

// button.addEventListener('click', function () {
//   if (bulbOff.classList.contains('hidden')) {
//     bulbOff.classList.remove('hidden');
//     //cambio testo all'interno del bottone
//     button.innerHTML = 'Accendi la lampadina';
//   } else {
//     bulbOff.classList.add('hidden');
//   }

//   if (bulbOn.classList.contains('hidden')) {
//     bulbOn.classList.remove('hidden');
//     button.innerHTML = 'Spegni la lampadina';
//   } else {
//     bulbOn.classList.add('hidden');
//   }
// });


console.log(button.innerHTML.replace(''));
