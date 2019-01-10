var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
console.log(titulo.textContent);

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(validacaoImc);

function validacaoImc(pacienteTr){
    var altura = pacienteTr.querySelector(".info-altura").textContent;
    var peso = pacienteTr.querySelector(".info-peso").textContent;

    var tdImc = pacienteTr.querySelector(".info-imc");

    if(!pesoValido(peso)){
        tdImc.textContent = "Peso inválido";
        pacienteTr.classList.add("paciente-invalido");
    }else if(!alturaValida(altura)){
        tdImc.textContent = "Altura inválida";
        pacienteTr.classList.add("paciente-invalido");
    }else{
      tdImc.textContent = calculaImc(peso, altura);
    }
}

function calculaImc(peso, altura){
    var imc = peso / (altura * altura);
     return imc.toFixed(2);
}

function pesoValido(peso){
    if(peso>0 && peso<250){
        return true;
    }else{
        return false;
    }
}

function alturaValida(altura){
    if(altura>0 && altura< 2.5){
        return true;
    }else{
        return false;
    }
}
