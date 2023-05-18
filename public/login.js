function fazerLogin() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;

    fetch(`pessoas`)
        .then(response => response.json())
        .then(data => {
            //Busca as pessoas cujo nome e idade concidem com os valores digitados pelo usuario
            //Esse (p) seria o parametro do find(achar) Função CallBack
            const pessoa = data.find(p => p.nome === nome & p.cpf === cpf);

            if (pessoa) {
                window.location.href = "bemvindo.html";
            } else {
                alert("Usuário não reconhecido")
            }
        })
}