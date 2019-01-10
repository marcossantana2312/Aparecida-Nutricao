var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
  
    var form = document.querySelector("#form-adicionar");

    var paciente = obterValoresForm(form);

    adicionarPaciente(paciente);
    form.reset();
    
});


function adicionarPaciente(paciente) {;
    
    erros = validacaoPaciente(paciente);
    
    ul = document.querySelector("#mensagens-erro");
    
    if(erros.length>0){
        exibirErros(erros, ul);
        return;
    }
    var pacienteTr = montarTr(paciente);

    document.querySelector("#tabela-pacientes").appendChild(pacienteTr);
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
    pacienteTr.appendChild(montarTd(calculaImc(paciente.peso, paciente.altura), "info-imc"));

    return pacienteTr;
}

function montarTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function validacaoPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O campo nome não pode ser deixado em branco!");
    }
    if(paciente.peso.length == 0){
        erros.push("O campo peso não deve ser deixado em branco!");
    }else if(!pesoValido(paciente.peso)){
        erros.push("O peso inserido não é válido");
    }
    if(paciente.altura.length == 0){
        erros.push("O campo altura não deve ser deixado em branco!");
    } else  if(!alturaValida(paciente.altura)){
        erros.push("A altura inserida não é válida");
    }
    if(paciente.gordura.length == 0){
        erros.push("O campo gordura não deve ser deixado em branco!");
    }
   
    return erros;
}

function exibirErros(erros, ul){

    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
       });
        
    
}