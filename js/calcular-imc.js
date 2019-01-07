var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
console.log(titulo.textContent);

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(calculaImc);

function calculaImc(pacienteTr){
    var altura = pacienteTr.querySelector(".info-altura").textContent;
    var peso = pacienteTr.querySelector(".info-peso").textContent;

    var tdImc = pacienteTr.querySelector(".info-imc");

    tdImc.textContent = validacaoImc(pacienteTr, peso, altura);
}

function validacaoImc(pacienteTr, peso, altura){
    var tdImc;
    if(peso <=0 || peso > 200){
        tdImc = "Peso inválido";
        pacienteTr.classList.add("paciente-invalido");
    }else if(altura <=0 || altura > 2.5){
        tdImc = "Altura inválida";
        pacienteTr.classList.add("paciente-invalido");
    }else{
        var imc = peso / (altura * altura);
        tdImc = imc.toFixed(2);
    }
    console.log(tdImc);
    
    return tdImc;
}