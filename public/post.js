//Função que envia os dados para o servidor
function enviarDados(){
    //obte os valores do input
    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const curso = document.getElementById('curso').value;
    const periodo = document.getElementById('periodo').value;
    const informacoesAdicionais = document.getElementById('informacoesAdicionais').value;
    

    fetch(`pessoas`, {
        method: 'POST', //Método HTTP utilizando post

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(
            {nome: nome, dataNascimento: dataNascimento, cpf: cpf, email: email,
            telefone: telefone, curso: curso, periodo: periodo,
            informacoesAdicionais: informacoesAdicionais
            }        
        )
    })
    .then(response => response.json())
    alert("Cadastro realizado (pressione o botão voltar)")
    

}