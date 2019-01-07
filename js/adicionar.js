var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', adicionarPaciente);


function adicionarPaciente(event) {
    event.preventDefault();
  
    var form = document.querySelector("#form-adicionar");

    var paciente = obterValoresForm(form);

    var pacienteTr = montarTr(paciente);
    console.log(pacienteTr);

    document.querySelector("#tabela-pacientes").appendChild(pacienteTr);
    
    validacaoImc(pacienteTr);
}

function obterValoresForm(form){
    paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value
    }
    return paciente;
}

function montarTr(paciente){
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(validacaoImc(pacienteTr, paciente.peso, paciente.altura), "info-imc"));

    return pacienteTr;
}

function montarTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}