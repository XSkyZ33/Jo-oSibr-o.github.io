function submitform(e) {
    e.preventDefault()
}



function resultado() {
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("telefone").value
    if (telefone.length >= 10) {
        alert("O número de telefone tem de ter 9 digitos");
        return;
    }
    let morada = document.getElementById("morada").value
    let nif = document.getElementById("nif").value
    if (nif.length >= 10) {
        alert("O NIF tem de ter 9 digitos");
        return;
    }
    let obs = document.getElementById("observaçoes").value

    console.log(nome);
    console.log(email);
    console.log(telefone);
    console.log(morada);
    console.log(nif);
    console.log(obs);


    document.getElementById("form").reset();


}