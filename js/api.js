const api = {
    async obterPensamentos(){
        try {
            const lRespostaDePensamentos = await fetch("http://localhost:3000/pensamentos");
            return await lRespostaDePensamentos.json();
        } catch (lErro) {
            alert(`Erro ao buscar seus pensamentos! ${lErro.name}: ${lErro.message}`); 
            throw lErro;   
        }
    },

    async obterPensamento(pIDDoPensamento){
        try {
            const lRespostaDePensamentos = await fetch(`http://localhost:3000/pensamentos/${pIDDoPensamento}`);
            return await lRespostaDePensamentos.json();
        } catch (lErro) {
            alert(`Erro ao buscar o pensamento (id ${pIDDoPensamento})! ${lErro.name}: ${lErro.message}`); 
            throw lErro;   
        }
    },
    
    async salvarPensamento(pPensamento){
        try {
            const lRespostaDePensamentos = await fetch(
                "http://localhost:3000/pensamentos",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(pPensamento)
                }
            );
            return await lRespostaDePensamentos.json();
        } catch (lErro) {
            alert(`Erro ao salvar pensamento! ${lErro.name}: ${lErro.message}`); 
            throw lErro;   
        }
    },

    async atualizarPensamento(pPensamento){
        try {
            const lRespostaDePensamentos = await fetch(
                `http://localhost:3000/pensamentos/${pPensamento.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(pPensamento)
                }
            );
            return await lRespostaDePensamentos.json();
        } catch (lErro) {
            alert(`Erro ao atualizar pensamento! ${lErro.name}: ${lErro.message}`); 
            throw lErro;   
        }

    }
}

export default api;