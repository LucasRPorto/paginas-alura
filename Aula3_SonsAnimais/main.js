function tocaSom(){
    document.querySelector('.som__burro').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < listaDeTeclas.length ){
    listaDeTeclas[contador].onclick = tocaSom;

    contador = contador +1 ;

    console.log("Esse é o valor do contador: " + contador);
}