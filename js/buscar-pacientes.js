var buscar = document.querySelector("#buscar-paciente");

buscar.addEventListener("click", function(){

    var xhr =  new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacie11ntes");
    xhr.send();
    xhr.addEventListener("load", function(){

        console.log("Buscando pacientes");
        var erroBusca = document.querySelector("#erro-busca");
        erroBusca.classList.add("invisivel");

        var status = xhr.status;

        var resposta = xhr.responseText;
        if(status == 200){
            console.log(status);
            
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente){
                adicionarPaciente(paciente);
            });
        }else{
            erroBusca.classList.remove("invisivel");
            console.log(status);
            console.log(resposta.responseText);
                       
        }
    })


})