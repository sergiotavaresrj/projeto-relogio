function showTime() {

    //Variáveis pegando hora, minuto e segundo
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    //Passando hora, minuto e segundo para uma unica variável.
    let txtHora = hora+':'+minutos+':'+segundos;

    //Selecionando id(relogio) para exibir o resultado no documento html.
    document.querySelector("#relogio").innerHTML = txtHora;


    //Entrutura para atualizar as cores do projeto de acordo com o horário.
    if (hora >= 0 && hora < 12) {
        document.querySelector("#msg").innerHTML = 'Bom dia!';
        document.querySelector("#msg").classList.add('msgDia');
        document.body.style.background = '#F0E68C';       
    } else if (hora >= 12 && hora < 18) {
        document.querySelector("#msg").innerHTML = 'Boa tarde!';
        document.querySelector("#msg").classList.add('msgTarde');
        document.body.style.background = '#ff9f3e';
    } else {        
        document.querySelector("#msg").innerHTML = 'Boa noite!';
        document.querySelector("#msg").classList.add('msgNoite');
        document.body.style.background = '#123e62';
    }
}

//Timer para deixar automático
let timer = setInterval(showTime, 1000);