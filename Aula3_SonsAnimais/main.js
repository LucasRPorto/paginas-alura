
// Função para adicionar som nos cards, utilizando o id do audio
function tocaSom(elementoAudio){
    document.querySelector(elementoAudio).play();
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
}
