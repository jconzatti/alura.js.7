import api from "./api.js"

const ui = {
    async renderizarPensamentos(){
        const lElementoListaDePensamentos = document.getElementById("lista-pensamentos");
        lElementoListaDePensamentos.innerHTML = "";
        try {
            const lPensamentos = await api.obterPensamentos();    
            lPensamentos.forEach(adicionarPensamentoNaLista);
        } catch (lErro) {
            alert(`Erro ao renderizar seus pensamentos! ${lErro.name}: ${lErro.message}`); 
            throw lErro;   
        }
    },

    async submeterFormularioDoPensamento(pEvento){
        pEvento.preventDefault();
        const lID = document.getElementById("pensamento-id").value;
        const lConteudo = document.getElementById("pensamento-conteudo").value;
        const lAutoria = document.getElementById("pensamento-autoria").value;
        try {
            if (lID){
                await api.atualizarPensamento({id: lID, conteudo: lConteudo, autoria: lAutoria});
            } else {
                await api.salvarPensamento({conteudo: lConteudo, autoria: lAutoria});
            } 
            ui.renderizarPensamentos();  
        } catch (lErro) {
            alert(`Erro ao salvar pensamento! ${lErro.name}: ${lErro.message}`); 
            throw lErro; 
        }
    },

    cancelarFormularioDoPensamento(){
        limparFormularioDoPensamento();
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

    const lElementoBotaoEditarPensamento = document.createElement("button");
    lElementoBotaoEditarPensamento.classList.add("botao-editar");
    lElementoBotaoEditarPensamento.onclick = () => {
        preencherFormularioDoPensamento(pPensamento.id);
        document.querySelector("main").scrollIntoView();
    };
    
    const lElementoIconeEditarPensamento = document.createElement("img");
    lElementoIconeEditarPensamento.src = "assets/imagens/icone-editar.png";
    lElementoIconeEditarPensamento.alt = "Editar";
    lElementoBotaoEditarPensamento.appendChild(lElementoIconeEditarPensamento);

    const lElementoBotaoExcluirPensamento = document.createElement("button");
    lElementoBotaoExcluirPensamento.classList.add("botao-excluir");
    lElementoBotaoExcluirPensamento.onclick = async () => {
        try {
            await api.excluirPensamento(pPensamento.id);
            ui.renderizarPensamentos();  
        } catch (lErro) {
            alert(lErro.message); 
            throw lErro; 
        }
    };
    
    const lElementoIconeExcluirPensamento = document.createElement("img");
    lElementoIconeExcluirPensamento.src = "assets/imagens/icone-excluir.png";
    lElementoIconeExcluirPensamento.alt = "Editar";
    lElementoBotaoExcluirPensamento.appendChild(lElementoIconeExcluirPensamento);

    const lElementoConteinerDasAcoesDoPensamento = document.createElement("div");
    lElementoConteinerDasAcoesDoPensamento.classList.add("icones");
    lElementoConteinerDasAcoesDoPensamento.appendChild(lElementoBotaoEditarPensamento);
    lElementoConteinerDasAcoesDoPensamento.appendChild(lElementoBotaoExcluirPensamento);

    lElementoItemDaListaDePensamentos.appendChild(lElementoIconeAspas);
    lElementoItemDaListaDePensamentos.appendChild(lElementoConteudoDoPensamento);
    lElementoItemDaListaDePensamentos.appendChild(lElementoAutoriaDoPensamento);
    lElementoItemDaListaDePensamentos.appendChild(lElementoConteinerDasAcoesDoPensamento);
    lElementoListaDePensamentos.appendChild(lElementoItemDaListaDePensamentos);
}

function limparFormularioDoPensamento(){
    document.getElementById("pensamento-form").reset();
    //document.getElementById("pensamento-id").value = "";
    //document.getElementById("pensamento-conteudo").value = "";
    //document.getElementById("pensamento-autoria").value = "";
}

async function preencherFormularioDoPensamento(pIDDoPensamento){
    const lPensamento = await api.obterPensamento(pIDDoPensamento);
    document.getElementById("pensamento-id").value = lPensamento.id;
    document.getElementById("pensamento-conteudo").value = lPensamento.conteudo;
    document.getElementById("pensamento-autoria").value = lPensamento.autoria;
}

export default ui;