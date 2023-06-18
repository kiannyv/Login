function creaMensaje(texto,tipo){
    const nuevoElemento = document.createElement('div');
    nuevoElemento.innerHTML = texto;
    nuevoElemento.classList.add('alert','alert-' + tipo);
    const divMensaje = document.getElementById('mensaje');
    divMensaje.appendChild(nuevoElemento);
    setTimeout(function(){
        nuevoElemento.remove();
    },2500);
}