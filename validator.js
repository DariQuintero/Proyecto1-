const validator = {

    isValid:function(cardnumber){
            console.log(cardnumber)
            let card=Array.from(cardnumber).reverse()
        console.log(cardnumber);
    for (let i=0; i<cardnumber; i++){
        console.log("for"+i)
        if(i%2 !==0){

            card[i]=card[i]*2;
            console.log(card);
        
        alert("Número válido")

        } 
        else
        {
        
            alert("Número inválido")
        }

    }

//convertir string en array tip2: array.from
//revertir arreglo tip: reverse 
//recorrer uno a uno los elementos del arreglo tip:bucle for

}

};

export default validator;
