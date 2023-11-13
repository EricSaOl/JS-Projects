const email = document.getElementById('emailRegister')
email.addEventListener('change', emailValidation)

const password = document.getElementById('passwordRegister')
password.addEventListener('change', passwordValidation)

const button = document.getElementById('button')
button.addEventListener('click', validation)

function emailValidation(){
    let eValue = email.value
    //modelo de email = xx@xx.xx  | email model = xx@xx.xx  
    if(!eValue.match(/\w{2,}@[a-zA-z]{2,}\.[a-zA-Z]{2,}/)){
        email.classList.add('error')
        return false
    }else{
        email.classList.remove('error')
        email.classList.add('done')
        return true
    }
}

function passwordValidation(){
    let pValue = password.value
     
    if(pValue.match (/[a-z]/) && pValue.match (/[A-Z]/) && pValue.match (/[0-9]/) && pValue.length >= 8 ){
        password.classList.add('done')
        return true
    }else{
        password.classList.remove('done')
        password.classList.add('error')
        return false
    }
}

function validation(){
    if(passwordValidation() && emailValidation()){
        alert(`Cadastro realizado com sucesso!`)
    }else{
        alert(`E-mail ou senha inválidos.`)
    }
}