const africa = ['Zebras', 'Liūtas', '', 'Raganosis', '', 'Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//1.1. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. (2 taškai)
// a. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. (4 taškai)
// b. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. (4 taškai)
const but = document.querySelector('button');
const header1 = document.querySelector('h2');
const header2 = document.querySelector('h2 + h2');

console.log(header1);
console.log(header2);

but.addEventListener('click', () => {
  header1.innerText = rand(1, 6);
  header2.innerText = rand(1, 6);
  console.log('atliktas paspaudimas');
  if (header1.innerText === header2.innerText) {
    header1.style.color = 'red';
    header2.style.color = 'red';
  } else {
    header1.style.color = 'black';
    header2.style.color = 'black';
  }

});


//2.2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti. (2 taškai)
// a. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. (4 taškai)
// b. <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. (4 taškai)
const tusciasMasyvas = [];
const skaicius = 0;
const skSuma = 0;
const but2 = document.querySelector('button2');
const tagH3 = document.querySelector('h3');
but.addEventListener('click', () => {
  tusciasMasyvas.rand(1, 6);
  console.log('atliktas paspaudimas' + tusciasMasyvas);
});