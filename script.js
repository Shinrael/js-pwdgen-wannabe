const name = prompt('Come ti chiami?');

const lastName = prompt('Il tuo cognome?');


const color = prompt ('Il tuo colore preferito?');

const number = 24;

console.log(name, lastName, color, number);

document.getElementById ('password') .innerHTML = `
<p> Ciao ${name + ' ' + lastName}, ecco la tua password sicura <strong> ${name + lastName + color + number} </strong> . </p>
`