
const url  = 'https://brasilapi.com.br/api/fipe/marcas/v1/carros'

//request json body
fetch(url)
    .then(async function (response) {
        const json = await response.json()
        json.forEach(item => {
            const option = document.createElement('option')
            option.value = item.valor
            option.innerText = item.nome
            const select = document.getElementById("#montadora-carro")
            select.append(option)
        })
    })
    .catch(err => {
        console.log("Failed to access data",err)
    })

var mySelect = new BVSelect({
    selector: "#montadora-carro",
    offset: true,
    width: "30rem",
    searchbox : false,
    search_autofocus : false,
    offset : true,
    search_placeholder :"Pesquisa...",
    placeholder : "Selecione uma opção",
});
var mySelect = new BVSelect({
    selector: "#modelo--carro",
    offset: true,
    width: "30rem",
    searchbox : false,
    search_autofocus : false,
    offset : true,
    search_placeholder :"Pesquisa...",
    placeholder : "Selecione uma opção",
});
var mySelect = new BVSelect({
    selector: "#ano--carro",
    offset: true,
    width: "30rem",
    searchbox : false,
    search_autofocus : false,
    offset : true,
    search_placeholder :"Pesquisa...",
    placeholder : "Selecione uma opção",
});
