const urlParams = new URLSearchParams(window.location.search);
const ret = urlParams.get("status")

if(ret == 'success'){
    alert("Seus dados foram recebidos com Sucesso!\nEm instantes um denossos atendentes entrará em contato.")
}
