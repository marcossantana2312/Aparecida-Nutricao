var campoFiltro = document.querySelector("#filtro-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value); 
    pacientes = document.querySelectorAll(".paciente");
    if(this.value.length > 0){
        pacientes.forEach(function(paciente){
            var nome = paciente.querySelector(".info-nome").textContent;
            var expressao = new RegExp(campoFiltro.value, "i");
            console.log(this.value);
            if(!expressao.test(nome)){
                console.log(nome);
                paciente.classList.add("invisivel");
            }else{
                console.log("entrei");         
                paciente.classList.remove("invisivel");
            }
        })
    } else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        })
    }
       
})