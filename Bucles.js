var suma=0
suma = suma+1;

//bucle for

//Repites un numero específico de veces, defines una variable con su valor inicia; la condicion para que se repita; variable++ (para que incremente en 1, puedes modificarlo obviamente)
//puedes poner var i=0, en este caso que es let:?


//aqui estas añadiéndole la variable de iteración en cada paso, así que la suma saldría 10 (4+3+2+1)
for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma);

// bucle while
 while(suma < 3) {
    suma = suma + 1;
        console.log(suma);
    };

// declaración continue:, saltas una vez el proceso si se cumple una condicion
console.log("continue");

 o = 0;
n = 0;
while (o < 5) {
  o++;
  
  if (o == 3) {
    continue;
  }
  n += o;

}
console.log(o);
//do while repite al menos una vez el proceso y la comparación es al final

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"



//break ayuda a terminar un bucle repentinamente si se cumple una condición.
console.log ("break");

    x=5
    i = 0;

    while (i < 6) {
      if (i == 3) break;
      i++;
      console.log (i);
    }
    return i * x;
    
  
