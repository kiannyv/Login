const pass_field = document.querySelector('.pass-key');
const showBtn = document.querySelector('.show');
showBtn.addEventListener('click',function(){
 if(pass_field.type == "password"){
  pass_field.type = "text";
  showBtn.textContent = "HIDE";
  showBtn.style.color = "#3498db";
 }else{
    pass_field.type == "password";
    showBtn.textContent = "SHOW";
    showBtn.style.color = "#222";
 }
});

//Declara variables para vincular los objetos de formulario
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formLogin');

//Generando evento
formulario.addEventListener('submit',login);

//funciones a ejecutar
function login(e){
    e.preventDefault();

    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuarioVal==''||passwordVal==''){
        creaMensaje('verifica tus campos!','danger');
        return;
    }

    if(localStorage.getItem('usuario')) {
        let objeto = JSON.parse(localStorage.getItem('usuario'));

        if(usuarioVal == objeto.user && passwordVal == objeto.pass){
            creaMensaje('Usuario correcto', 'success');
            localStorage.setItem('sesion','activa');
            setTimeout(function(){
                window.open('../html/inicio.html', '_self');
           },2000);
       }else{
          creaMensaje('usuario incorrecto','danger');
       }
    }else{
      creaMensaje('No existe usuario', 'danger');
    }
} 

