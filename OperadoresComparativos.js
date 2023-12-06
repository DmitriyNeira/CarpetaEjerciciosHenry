
//Operaciones de comparación
console.log (4 < 7); 
console.log (4 < 1 );
console.log (4 > 4); 
console.log (4 == 7);

//Igualdad vs igualdad estricta 
console.log (3 == 3); 
// el == compara para ver si son iguales, mientras que = asigna un valor.
console.log (3 === 3); 
console.log (3 == "3"); 

// === es comparacion estricta, no hace conversione de tipos antes de analizar
console.log (3 === "3");
console.log (7 == "7");
console.log (7 === "7");

//Asignación y asociatividad

var a = 1;
var b = 2;
var c = a = b;
console.log (c); 