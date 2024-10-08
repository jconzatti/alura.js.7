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
            alert(`Erro ao salvar seus pensamento! ${lErro.name}: ${lErro.message}`); 
            throw lErro;   
        }
    }
}

export default api;