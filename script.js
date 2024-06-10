//Na variável key insira uma chave valida, eu utilizei a do openwathermap basta apenas criar uma conta no site é de graça, apenas cria e vai nas configurações, pega a chave e cola no espaço vazio da variável.
const key = "";

function colocarDadosNaTela(dados){
      console.log(dados)
   document.querySelector(".texto-cidade").innerHTML ="Cidada: "+dados.name
   document.querySelector(".tempo").innerHTML = "Temperatu e de " + Math.floor(dados.main.temp)+"ºC"
   document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
   document.querySelector(".texto-umidade").innerHTML ="Umidade: "+dados.main.humidity+"%"
   document.querySelector(".img-gatos").src = `https://openweathermap.org/img/wn/
${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){
   const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta =>  resposta.json())
   
   colocarDadosNaTela(dados)
}

function clickNoBotao(){
   const cidade = document.querySelector(".input-cidade").value
   
   buscarCidade(cidade);
}


