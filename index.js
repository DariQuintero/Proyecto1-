import validator from './validator.js';
    function captura(){
        let cardnumber= document.getElementById("cardnumber").value
        console.log(cardnumber)
        validator.isValid(cardnumber)
    }
    let btnvalidar=document.getElementById("btnvalidar")
    btnvalidar.addEventListener("click",captura)
console.log(validator);
