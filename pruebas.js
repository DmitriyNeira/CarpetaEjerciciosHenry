/**
 * *esto lo hago para ver como funciona la extensión better comments
 * !ASÍ FUNCIONA BETTER COMMENTS
 * ? Cómo se configura mejor???'
 * 
 * *Sabes, puedes modificar colores a tu gusto.
 * TODO: ESTO ES UNA LISTA DE TAREAS TO DO
 * 
 * 
 * !!!!! USA /* CON DOS * PARA QUE SE HAGA UNA LISTA DE COMENTARIOS COMO ESTA,
 * !HACE TODO MÁS RÁPIDO
 */

array=[1,2,3,4,5,1,2,3,4]
elemento=7;



//console.log(agregarItemAlFinalDelArray (array,elemento));
function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   //!OJO, al ponerlo en un return devuelve la nueva longitud del array
   array.push (elemento);
   
   return array ;
}

/*
var pal=[11,2,7,3,99,4,5];
var mayor;
mayor_total=pal[0];

for (let i=0;i<pal.length-1; i++){
   if (  pal[i]>pal[i+1]){
      
      if ((i!==0) && (mayor_total<mayor )) {
         mayor_total=mayor;
      }
      mayor=pal[i];
      //console.log("mayor total: ",mayor_total);
   } else  
      if ((i!==0) && (mayor_total<mayor )) {
         
         mayor_total=mayor;
      }
      mayor= pal[i+1]
   }


console.log(mayor_total);
/*
var max=pal.join('');
max=max.split("");

for (let i=0; i<max.length;i++){
   max[i]=parseInt(max[i] ,10);
}
console.log(max);

console.log();

+/
var suma=0;
/*for (let x=0;x<pal.length; x++){
   console.log([x]);
   suma=suma+pal[x];

}
console.log(suma);*/



//z=saludo (undefined);

function saludo(idioma) {
   switch (idioma) {
      case "aleman":
         return "Guten Tag!";
      case "mandarin":
         return "Ni Hao!";
      case "ingles":
         return "Hello!";
      
   }
}

      // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var arraypru=[1,2,5,7];



   function argumentos (arrpru){
      
      if (arrpru.length===0){
      return 0; 
      }
      if (arrpru.length===1){
         return arrpru[0];
      }

      producto=1;
      for (let i=0;i<arrpru.length;i++){
         
         producto=producto *arrpru[i];
         
         
      }
      return producto;
   } 




function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código
   var numstr=num.toString();
   var digitos= numstr.split("");
   console.log(digitos);
   numstr.split("");
   if (numstr[0]==9){
      return true;
   }else return false;

}

/*
var array=["Diciembre","mes","hola"];
console.log(mesesDelAño (array));
function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var mes=[];
   if (array.includes("Enero")){ mes.push("Enero"); }
   if (array.includes("Marzo")){ mes.push("Marzo"); }
   if (array.includes("Noviembre")){ mes.push("Noviembre"); }
   if (mes.length>0){
      return mes;
   } else return "No se encontraron los meses pedidos";

}*/



/*
var array = [

   'Diciembre',
   'Abril',
   'Junio',
   'Julio',


   'Mayo',
   'Febrero',
];
console.log(mesesDelAño(array));
function mesesDelAño(array) {
var mes=[];
   for (let i=0;i<array.length;i++){
      if (array[i]==="Enero"){mes.push("Enero");}
      if (array[i]==="Marzo"){mes.push("Marzo");}
      if (array[i]==="Noviembre"){mes.push("Noviembre");}
   }
   console.log(mes.length)


   if (mes.length>0){

      return mes;
   } else return "No se encontraron los meses pedidos";
}*/
var integers = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22];
//console.log(mayorACien(integers));

/*
function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var nummay100=[];
   for (let i=0; i<array.length;i++){
      console.log(array[i]);

      if (array[i]>100){


         nummay100.push(array[i]);
      }

   }

   return nummay100;

}*/

/*console.log(crearGato("mishi", 8));

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var gato = {
      nombre: nombre,
      edad: edad
   };

   gato.meow = function() {
      return "Meow!";
   };

   return gato.meow();
}*/

var gato = {
   nombre: "nieve",
   edad: 3
};

//console.log(agregarPropiedad(gato, "color"));
function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad]=null;
   return objeto;

}

const user = {
   usernombre: 'Jhon Doe',
   password: 'JavaScript es genial!',
   posts: [
      {
         id: '1',
         title: 'Aventuras en JS!',
         likes: 10,
      },
      {
         id: '2',
         title: 'Soy Henry!',
         likes: 100,
      },
      {
         id: '3',
         title: 'Qué es un JavaScript?',
         likes: 35,
      },
      {
         id: '4',
         title: 'JS Objects for Dummies',
         likes: 42,
      },
      {
         id: '5',
         title: 'Educación online',
         likes: 99,
      },
   ],
};


/*console.log(sumarLikesDeUsuario(user));

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   var like=0;

   for (let i=0;i<objetoUsuario.posts.length;i++){
      
      like= like+ objetoUsuario.posts[i].likes;
      

   }
   return like;
}*/
const storeItem = {
   precio: 80,
   porcentajeDeDescuento: 0.1,
};
const storeItem2 = {
   precio: 5,
   porcentajeDeDescuento: 0.5,
};


console.log(agregarMetodoCalculoDescuento(storeItem2));
function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto.calcularPrecioDescuento= function(){
      Descuento=this.porcentajeDeDescuento*this.precio;
      let Precio_Final=this.precio-Descuento;
      return Precio_Final
   };
//! ERROR, Aquí estás haciendo que no se pueda reconocer el resultado fuera de la función.
//! Es una operación interna, por lo que debes acceder al objeto directamente para acceder desde afuera.
//? Aún no entiendo bien, ¿por qué?
// ! return objetoProducto.calcularPrecioDescuento();
 return objetoProducto;
}