//? ¿como guardar información en el objeto?

var deportes={ 
    conBalon:["Football","Basketball","Rugby"],
    sinBalon: ["Boxeo","Surf","Trekking"],
};

var persona = {nombre: "Lucas", edad: 26, estudios: {esProgramador: true}}
//* dentro de estudios pones una propiedad, creas un objeto dentro de otro objeto.


//*acceso a propiedades.

//console.log(persona.edad);

//* modificacion de valores
persona.nombre="Martin";
//console.log(persona.nombre);


//* Creación de propiedades
//! NO PUEDES CREAR PROPIEDADES VACÍAS
//? Cuando ya existe un objeto luego solo añades las propiedades y sus valores
var autos = {};

autos.marcas=["Ford","Audi","Ferrari"]
//console.log(autos);


//* Eliminación de propiedades


delete autos.marcas;
//console.log(autos);


// * Funciones en objetos

var misFunciones ={
    saludar: function(){
        (console.log("Hola")) 
    }, 
};

//misFunciones.saludar();


//* Sintaxis para trabajar con objetos
//Hasta ahora haz usado Dot-Notation

var atuendos= {
    manos: ["Guantes","Anillos"],
    pies: ["Zapatos","Medias" ]
}

//Bracket Notation

//Haces lo mismo pero con corchetes en vez del .
//Lo unico que cambia es que la propiedad va entre [""] en vez de  atuendo.nombre



atuendos["piernas"]=["Bermudas","Pantalones"];
//console.log(atuendos);

//! Bracket Notation tiene una particularidad que dot no tiene

//Mira el ejemplo: Si haces esto les esta dando como nombre propUno y propDos en vez de la variable que le pasaste.

var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
    comidas.propUno = ['Frutas', 'Vegetales'];
    comidas['propDos'] = ['Hamburguesas', 'Papas fritas'];


}

//diferenciaDeNotaciones('saludable','noSaludable');
//console.log(comidas);*/

//todo AQUI VIENE EL BRACKET NOTATION.
//*Con dot notation no puedes hacer esto.

var diferenciaDeNotaciones = function (propUno, propDos) {
    comidas[propUno] = ['Frutas', 'Vegetales'];
    comidas[propDos] = ['Hamburguesas', 'Papas fritas'];


}

diferenciaDeNotaciones('saludable','noSaludable');
console.log(comidas); //sale el nombre de la variable externa