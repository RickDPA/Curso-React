const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;


//console.log(saludar('Goku'));
console.log(saludar);
console.log(saludar2("Vegetta"));
console.log(saludar3("Goku"));
console.log(saludar4());


const getUser = () => ({
    
        uid: "ABC123",
        username: "El_papi1502"
    
});
const user = getUser();
console.log(user);

//----------------------------------------
function getUsuarioActivo(nombre){
    return{
        uid:"ABC567",
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo("Feranando");
console.log(usuarioActivo);


//----------------------Tarea--------------------

const getUsuarioActivo2 = (nombre) => ({
    uid:"ABC567",
    username: nombre
});

const usuarioActivo2 = getUsuarioActivo2("Feranando");
console.log(usuarioActivo2);