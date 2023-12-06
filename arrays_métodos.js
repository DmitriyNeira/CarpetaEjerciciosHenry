
var colores =["amarillo","azul"];
colores.push("rojo"); //Push coloca un elemento extra al final del arreglo.
colores.unshift("verde");//Unshift coloca un elemento al inicio del arreglo.

console.log(colores);



colores.pop();//elimina el último elemento
colores.shift();//elimina el primer elemento

console.log(colores);


//*Método includes
//determina si un arreglo incluye un elemento o no (true o false)
var pintores = ["Da Vinci","Van Gogh","Caravaggio","Picasso","Dali"];



console.log(pintores.includes("Dali")); //sale true
console.log(pintores.includes("Monet")); //sale false

//* Método every
//Muestra si cada elemento en un array cumple una condición.)
// *recuerda que => es una función flecha, con esto defines funciones omitiendo la palabra function y a veces incluso la llave.
//a veces como el caso que se ve también se puede omitir return (no significa que debas o siempre sea así)

var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { return num > 5 } );

console.log(cumplenCondicion);//sale falso por que no es verdad, si cambias el 1 por un numero mayor a 5 da true

console.log("Métodos parte 2");


/**
 * Split separa strings
 * *Si colocas '' separará cada letra del string.
 * ? lo que está dentro del split indica lo que quieres separar
 * ? si colocas '' separa cada letra, si colocas a separará cada a, y si colocas ' ' separará cada espacio
 * *Al hacer esto el string se convierte en un arreglo.
 * Si no pones el '' tomará solo el último.
 */

var palabra = "Henri"
var palabraSeparada = palabra.split("");

/**
 * al estar en un arreglo te permitirá reemplazar letras específicas del string cambiando la ubicación ejemplos:
 */

palabraSeparada.pop();
palabraSeparada.push("y");
console.log(palabraSeparada);

//*Método Join
// ? Muy bonito y todo pero como vuelves a unir el array a un string?
// Con Join
// ! Si dejas Join vacío aparecerá así H,E,N,R,Y   
// ! Por esto debes usar las mismas condiciones marcadas para split, con '' se toman todos lo valores.

PalabraPrueba=palabraSeparada.join('');
console.log(PalabraPrueba); 



//*Métodos para recorrer arreglos

//*Método forEach()
//esto hace un proceso por cada uno de los valores del arreglo
//ejemplo, quieres imprimir en consola cada valor por separado:
//este ejemplo usa función flecha

var num =[0,1,2,3,4,5];
num.forEach(  (num) => console.log(num)   )

//este mostrará los números iguales a 3

console.log("Console log de los que son iguales a 3  ");

num.forEach( num =>{ if (num  === 3) {console.log(num)}   } )

// ! ESTE MÉTODO HACE UNA ACCIÓN SOBRE EL ARREGLO QUE ESPECIFICAMOS
// ! PERO NO LO CAMBIA, SOLO LO RECORRE.


//*Método map()
// Este método si hace cambios en el arreglo

var MasUno = num.map( num => { return num+1;  }    )
console.log("Variables de num +1");
console.log(MasUno);