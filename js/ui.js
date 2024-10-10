import api from "./api.js"

const ui = {
    async renderizarPensamentos(){
        try {
            const lPensamentos = await api.obterPensamentos();    
            lPensamentos.forEach(adicionarPensamentoNaLista);
        } catch (lErro) {
            alert(`Erro ao renderizar seus pensamentos! ${lErro.name}: ${lErro.message}`); 
            throw lErro;   
        }
    }
}

function adicionarPensamentoNaLista(pPensamento){
    const lElementoListaDePensamentos = document.getElementById("lista-pensamentos");

    const lElementoItemDaListaDePensamentos = document.createElement("li");
    lElementoItemDaListaDePensamentos.setAttribute("data-id", pPensamento.id);
    lElementoItemDaListaDePensamentos.classList.add("li-pensamento");

    const lElementoIconeAspas = document.createElement("img");
    lElementoIconeAspas.src = "assets/imagens/aspas-azuis.png";
    lElementoIconeAspas.alt = "Aspas azuis";
    lElementoIconeAspas.classList.add("icone-aspas");

    const lElementoConteudoDoPensamento = document.createElement("div");
    lElementoConteudoDoPensamento.classList.add("pensamento-conteudo");
    lElementoConteudoDoPensamento.textContent = pPensamento.conteudo;

    const lElementoAutoriaDoPensamento = document.createElement("div");
    lElementoAutoriaDoPensamento.classList.add("pensamento-autoria");
    lElementoAutoriaDoPensamento.textContent = pPensamento.autoria;

    lElementoItemDaListaDePensamentos.appendChild(lElementoIconeAspas);
    lElementoItemDaListaDePensamentos.appendChild(lElementoConteudoDoPensamento);
    lElementoItemDaListaDePensamentos.appendChild(lElementoAutoriaDoPensamento);
    lElementoListaDePensamentos.appendChild(lElementoItemDaListaDePensamentos);
}

export default ui;