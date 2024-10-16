import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () =>{
    ui.renderizarPensamentos();

    const lElementoFormularioDePensamento = document.getElementById("pensamento-form");
    lElementoFormularioDePensamento.addEventListener("submit", ui.submeterFormularioDoPensamento);
    const lElementoCancelarPensamento = document.getElementById("botao-cancelar");
    lElementoCancelarPensamento.addEventListener("click", ui.cancelarFormularioDoPensamento);
});