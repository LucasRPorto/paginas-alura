
// Função para adicionar som nos cards, utilizando o id do audio
function tocaSom(elementoAudio){
    const elemento = document.querySelector(elementoAudio);

    if(elemento && (elemento.localName === 'audio')){
        elemento.play();
        console.log('Elemento encontrado');
    }

    else{
        console.log(elemento);
        console.log('Elemento inválido: Aguardando um elemento do tipo audio');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const classeSom = tecla.classList[1];
    // Template String
    const classeAudio = `#${classeSom}`;

    // Ao clicar em alguma das teclas, realizar a ação
    tecla.onclick = function (){
        tocaSom(classeAudio);
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === 'Enter' || evento.code === 'Space'){
        tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
