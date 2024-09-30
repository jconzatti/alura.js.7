async function obterPensamentos(){
    const lRespostaDePensamentos = await fetch("http://localhost:3000/pensamentos");
    const lPensamentos = await lRespostaDePensamentos.json();
    console.log(lPensamentos);
}

obterPensamentos();