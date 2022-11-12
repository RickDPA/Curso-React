
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55552342,
        lat: 14.324,
        lng: 34.1321312
    }
};

//console.table({persona});
//console.log({persona}); Se usan los corchetes {} para mostrar el nombre del objeto

const persona2 = {...persona};
persona2.nombre = 'Peter';
persona2.apellido = 'Parker';

console.log(persona);
console.log(persona2);