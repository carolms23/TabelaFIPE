
const url  = 'https://brasilapi.com.br/api/fipe/marcas/v1/carros'
//criando uma variável para guardar a promise do fetch
fetch(url)
    .then(async function (response) {
        document.getElementById("simulator").innerHTML = JSON.stringify(await response.json())
    })
    .catch(err => {
        console.log("Failed to access data",err)
    })