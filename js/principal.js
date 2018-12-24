var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
console.log(titulo.textContent);

var paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);


var altura = paciente.querySelector(".info-altura").textContent;
var peso = paciente.querySelector(".info-peso").textContent;

var tdImc = paciente.querySelector(".info-imc");

if(peso <=0 || peso > 200){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido";
}else if(altura <=0 || altura > 2.5){
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida"
}else{
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}