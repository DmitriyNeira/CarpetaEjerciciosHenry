//no te olvides el === es buena práctica.
function viajar (destino){
    if (destino === "Brasil"){
console.log("Gire a la Izquierda");
    } else if (destino === "Argentina"){
        console.log("Gire a la Derecha");
    } else {
        console.log("Andas perdido")
    }
}
viajar ('Brasil');
viajar ("Argentina");

//ya conoces esto y la sintaxis es la misma que viste

function puedeManejar(edad) {
    if(edad >= 18) {
        console.log( true );
    } 
    console.log( false );
    }

    puedeManejar(17);