//variabile con lampadina da accendere e spegnere scambiandola tra 2 immagini
//variabile del pulsante da premere per accendere e spegnere la lampadina

const bulbOn = document.getElementById('on-bulb');//.innerHTML;//elemento img contenuto in html
// console.log(bulbOn.innerText);

const bulbOff = document.getElementById('off-bulb');//.innerHTML;//elemento img contenuto in html

const button = document.getElementById("on-off");

// console.log(bulbOn.classList.contains('hidden'));

// event listener per cambiare l'immagine;
button.addEventListener('click', function () {
  bulbOn.classList.toggle('hidden');
  bulbOff.classList.toggle('hidden');
})

