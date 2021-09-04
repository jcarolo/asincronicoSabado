console.log("iniciando");

function ejecutarPrograma(finalizarPrograma){

    setTimeout(function(){

        console.log ("procesando...");
        finalizarPrograma();
         }, 5000);

        console.log ("procesando...");        


}

ejecutarPrograma(function(){

    console.log ("terminado...");
})