let chave ="aaf4798cd23638c7ac9ad539016d8648";

function clique(){
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade);

    if(!cidade){
        alert("Inserir o nome da cidade")

    } else{
        buscarCidade(cidade);
    }
}

async function buscarCidade(cidade){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +  
        "&units=metric")
        .then(res => res.json())

    colocanaTela(dados); 

    console.log(dados);
    console.log(dados.main.temp)
}

function colocanaTela(dados){
    document.querySelector(".nome-cidade").innerHTML = dados.name;
    document.querySelector(".temp").innerHTML = (dados.main.temp) + " °C";
    document.querySelector(".descricao").innerHTML = "Descrição: " + dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}


