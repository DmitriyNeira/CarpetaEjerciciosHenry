
var arr=[1,2,3,4,5];

// Aquí tomas un for, haces que se repita hasta que i sea igual al tamaño del arreglo y escribe cada
// elemento del arreglo
for (var i=0; i< arr.length ; i++){
console.log (arr[i]);

};

//Una función que recibe un string y revisa si hay alguna p
var str="Parapampampam";
/* 
* Esto harías normalmente, PEERO ESTÁS APRENDIENDO BUCLES ASÍ QUE:
console.log(revision_string(str));

function revision_string (str){


    let x=str.split("");
    if (x.includes("p")){

        return true;
    } else return false;


}
*/
//!Este ejercicio por si solo es sensible a mayúsculas por lo que dice si hay P, pero no si hay p
//!Para corregir esto necesitas un método
// Uno de esos métodos es .toUpperCase()  y otro .toLowerCase(), estos los convierten a mayúsculas o minúsculas.
//Por lo que si hay una p le dará igual, también puedes usar en el if:
//(letras[i].localeCompare("p", undefined, { sensitivity: 'base' }) === 0)
// Este útlimo hace una comparación y hace que sea insensible a mayúsculas o minúsculas.

console.log(encontrarLetraP("Parangaricutirimicuaro"));
console.log(encontrarLetraP("tarangaricutirimicuaro"));

function encontrarLetraP(string){
    var letras=string.split('');

    for(let i=0; i<string.length;i++ ){
        if (letras[i]==="P"){
            return true;
        }
    } 
    return false;
}

//*  While:

// esto hará que si arr2 tiene menos de 5 elementos los rellenará con BOOM hasta llegar a 5
Console.log("While:");

var arr2=[];

while (arr2.length<5){
    arr.push("BOOM");
}
console.log(arr2);


//?BUCLE INFINITO: Que pasa si pones una mala condición y nunca deja de repetirse
//! Todo sale mal
// Ya lo conoces, no lo pongas aqui que no quieres buguearlo.