let lista_de_compras=[];
lista_de_compras[3]="Tomates";

console.log(lista_de_compras);

lista_de_compras[2]="Lechuga";
/**
 * *Al agregar tomates en 3 deja 3 items vacíos (0,1,2) y 3 es tomates
 * *Al agregar lechuga al 2 deja 2 vacíos
 */
console.log(lista_de_compras);

//*al acceder a un elemento

let x=lista_de_compras[3] ;
console.log(x);

console.log(lista_de_compras.length);