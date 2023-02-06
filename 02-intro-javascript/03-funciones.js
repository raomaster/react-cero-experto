// Funciones en JS
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

const saludar2 = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = (nombre) => `Hola, ${nombre}`;
// saludar = 30;

const saludar5 = () => 'Hola mundo';

console.log(saludar4('Goku'));

const getUser = () => ({
  uid: 'ABC123',
  username: 'El_papi1502',
});

const getUser2 = () => ({
  uid: 'ABC123',
  username: 'El_papi1502',
});

console.log(getUser(), getUser2());

console.log(getUser(), getUser2());
