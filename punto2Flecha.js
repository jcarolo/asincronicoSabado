// configuro el cuerpo de la funcion principal

let robarPlanos=(id,despegarNave)=>{


    if(id >0 && id<=10){

        console.log(`Accedimos a un plano ${id}`)
            despegarNave (null);
       }else{
            console.log(`Accedimos a un plano falso`)
            despegarNave("error");
        }  
}

robarPlanos( 2,error=>{
    if (error){
        console.log("Devolvete papá")
    } else {
        console.log("arracamos la nave")
    }

})