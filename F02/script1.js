function addNumbers(){
    let string1 = "Números: ";
    let string2 = "Estrelas: ";
    let numero = 0;
    let estrela = 0;

    for(let i = 0; i<5; i++){
        numero = Math.floor(Math.random() * 51);
        string1 = string1 + numero + " - "
    }
    for(let e = 0; e<2; e++){
        estrela = Math.floor(Math.random() * 12)+1;
        string2 = string2 + estrela + " - "
    }
    let num = document.getElementById("num");
    let est = document.getElementById("est");
    num.innerHTML = string1;
    est.innerHTML = string2;
}