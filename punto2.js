// configuro el cuerpo de la funcion principal

function robarPlanos(id,despegarNave){


    if(id >0 && id<=10){

        console.log(`Accedimos a un plano ${id}`)
            despegarNave (null);
       }else{
            console.log(`Accedimos a un plano falso`)
            despegarNave("error");
        }  
}

robarPlanos(1,function(error){
    if (error){
        console.log("Develvase papá")
    } else {
        console.log("arrancamos la nave")
    }

})