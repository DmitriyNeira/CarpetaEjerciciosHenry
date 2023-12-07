//* Método hasOwnProperty

var libro ={autor: "Borges", genero: "Policial", año: 1990 }

//console.log(libro.hasOwnProperty("nombre")); //false
//console.log(libro.hasOwnProperty("autor"));//true

//*Método keys

//devuelve un arreglo con el nombre de todas las propiedades.
//!Ojo con el Object
var propiedades = Object.keys(libro);
//console.log (propiedades);

//* Recorrer objetos

// ! BUCLE ESPECIAL for in

var mundo ={ continentes: 7, paises: 195, océanos:5}
for (var prop in mundo){
    console.log("Esta es la propiedad: " +prop);
    console.log("Este es el valor: " +mundo[prop]);
}



//* objeto THIS

var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: function ()  { //función dentro del objeto
        console.log('Mi perro es un  ' + this.raza);
    },
};
mascota.info();
 //si no pones this.raza sino solo raza la terminal te manda tremendo error por que no reconoce el contexto
 //así que debes decir que el contexto es un objeto. 
 //de esta forma al llamar al objeto en la función info si te sale el resultado