const nombre = 'Ricardo';

console.log('name :', nombre);

const apellido = 'Oyarzo';

const nombreCompleto = `
  ${nombre}
  ${apellido}
`;

console.log('nombre completo', nombreCompleto);

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 555332323,
    lat: 14.3232,
    lng: 34.923321,
  },
};

// falso clon :  copia con paso de referencia
const persona2 = persona;

// un verdadero clon (solo 1 nivel)
const persona3 = { ...persona };

console.table(persona);
console.table(persona2);
console.table(persona3);
