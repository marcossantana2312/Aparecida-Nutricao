var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
console.log(titulo.textContent);

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

function validacaoImc(paciente){
    var altura = paciente.querySelector(".info-altura").textContent;
    var peso = paciente.querySelector(".info-peso").textContent;

    var tdImc = paciente.querySelector(".info-imc");

    if(peso <=0 || peso > 200){
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }else if(altura <=0 || altura > 2.5){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida"
        paciente.classList.add("paciente-invalido");
    }else{
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}
pacientes.forEach(validacaoImc);