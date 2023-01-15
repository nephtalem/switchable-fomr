const signUp = document.getElementById('sign-up')
const login = document.getElementById('log-in')
const signupContent = document.querySelector('.signup-content')
const loginContent = document.querySelector('.login-content')

signUp.addEventListener('click',function(){
    loginContent.style.display = 'none'
    signupContent.style.display = 'block'
    login.classList.remove('brown')
    signUp.classList.add('brown')
})

login.addEventListener('click',function(){
    signupContent.style.display = 'none'
    loginContent.style.display = 'block'
    login.classList.add('brown')
    signUp.classList.remove('brown')
    loginContent.classList.remove('none')
    
})