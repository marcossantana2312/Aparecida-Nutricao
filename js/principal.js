var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
console.log(titulo.textContent);

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(validacaoImc);

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', adicionarPaciente);


function validacaoImc(paciente){
    var altura = paciente.querySelector(".info-altura").textContent;
    var peso = paciente.querySelector(".info-peso").textContent;

    var tdImc = paciente.querySelector(".info-imc");

    if(peso <=0 || peso > 200){
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }else if(altura <=0 || altura > 2.5){
        tdImc.textContent = "Altura inválida"
        paciente.classList.add("paciente-invalido");
    }else{
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

function adicionarPaciente(event) {
    event.preventDefault();
  
    var form = document.querySelector("#form-adicionar");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.classList.add("info-nome");
    pesoTd.classList.add("info-peso");
    alturaTd.classList.add("info-altura");
    gorduraTd.classList.add("info-gordura");
    imcTd.classList.add("info-imc");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    console.log(pacienteTr);

    document.querySelector("#tabela-pacientes").appendChild(pacienteTr);
    
    validacaoImc(pacienteTr);
    

}