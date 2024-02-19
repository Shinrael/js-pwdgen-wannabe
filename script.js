const name = prompt('Come ti chiami?');

const lastName = prompt('Il tuo cognome?');


const color = prompt ('Il tuo colore preferito?');

console.log(name, lastName, color);

document.getElementById ('password') .innerHTML = name + lastName + color + 24;