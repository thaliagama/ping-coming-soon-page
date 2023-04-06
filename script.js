let btn = document.querySelector('#btn').addEventListener('click', validarEmail)
let inputEmail = document.querySelector('.email')
let msg = document.querySelector('.msgErro')

function validarEmail(email) {
    email = inputEmail.value
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validaEmail = re.test(email)

    if(validaEmail == false){
        mensagemErro()
    }
    else{
        msgEmailValido()
    }
}

function mensagemErro(){
    msg.innerHTML = 'Please provide a valid email address'
    inputEmail.classList.add('email-erro')
}

inputEmail.addEventListener('blur', validarEmail)

inputEmail.addEventListener('focus', ()=> {
    msg.innerHTML=''
    inputEmail.classList.remove('email-erro')
})

function msgEmailValido(){
    msg.innerHTML = 'Thanks!'
    msg.style.color = 'green'
}