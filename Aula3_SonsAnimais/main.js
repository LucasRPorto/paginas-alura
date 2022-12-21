
// Função para adicionar som nos cards, utilizando o id do audio
function tocaSom(elementoAudio){
    document.querySelector(elementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');

// Realizando a contagem dos elementos da lista de Teclas
let contador = 0; 


while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const classeSom = tecla.classList[1];
    // Template String
    const classeAudio = `#${classeSom}`;

    // Ao clicar em alguma das teclas, realizar a ação
    tecla.onclick = function (){
        tocaSom(classeAudio);
    }

    contador = contador +1 ;
}