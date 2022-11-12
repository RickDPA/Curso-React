//Desestructuración
//Asignación Desestructurante

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
    rango: "Soldado"
};

const {nombre, edad, clave} = persona;


/*
console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );
*/

const retornaPersona = ({clave, nombre, edad, rango = "Capitan"} ) => {
    //console.log(nombre, edad, rango);

    return{
        nombreClave: clave,
        anios: edad, 
        lating:{
            lat: 1231.123,
            lng: -1231
        }
    }
}

const avenger = retornaPersona(persona);
const {nombreClave, anios, lating:{lat, lng}} = retornaPersona(persona);

console.log(avenger);
console.log(nombreClave, anios);
console.log(lat, lng)