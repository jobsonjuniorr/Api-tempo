const key = "956c06ab69a9e8256164fc1b4f09ac6b"

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


