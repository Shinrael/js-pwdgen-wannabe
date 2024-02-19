const name = prompt('Come ti chiami?');

const lastName = prompt('Il tuo cognome?');


const color = prompt ('Il tuo colore preferito?');

console.log(name, lastName, color);

document.getElementById ('password') .innerHTML = `
<p> Ciao ${name + ' ' + lastName}, ecco la tua password sicura <strong> ${name + lastName + color + 24} </strong> . </p>
`