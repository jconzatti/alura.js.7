import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () =>{
    ui.renderizarPensamentos();

    const lElementoFormularioDePensamento = document.getElementById("pensamento-form");
    lElementoFormularioDePensamento.addEventListener("submit", submeterFormularioDoPensamento);
    const lElementoCancelarPensamento = document.getElementById("botao-cancelar");
    lElementoCancelarPensamento.addEventListener("click", cancelarPensamentoDoFormulario);
});

async function submeterFormularioDoPensamento(pEvento){
    pEvento.preventDefault();
    const lID = document.getElementById("pensamento-id").value;
    const lConteudo = document.getElementById("pensamento-conteudo").value;
    const lAutoria = document.getElementById("pensamento-autoria").value;
    try {
        await api.salvarPensamento({conteudo: lConteudo, autoria: lAutoria}); 
        ui.renderizarPensamentos();  
    } catch (lErro) {
        alert(`Erro ao salvar pensamento! ${lErro.name}: ${lErro.message}`); 
        throw lErro; 
    }
}

function cancelarPensamentoDoFormulario(){
    document.getElementById("pensamento-form").reset();
    //document.getElementById("pensamento-id").value = "";
    //document.getElementById("pensamento-conteudo").value = "";
    //document.getElementById("pensamento-autoria").value = "";
}