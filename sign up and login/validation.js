const form= document.getElementById('form')
const firstname_input = document.getElementById(firstname_input)
const email_input = document.getElementById(email_input_input)
const password_input = document.getElementById(password_input)
const repeatpassword_input = document.getElementById(repeatpassword_input)
const error_message= document.getElementById('error-message')
form.addEventListener('submit', (e) =>{
   e.preventDefault()

   let error = []
    if (firstname_input){
        error= getSignUpErrors(firstname_input.Value,email_input.Value,password_input.Value,repeatpassword_input.Value)
    }
    else{
        error= getLoginFormError(email_input.Value,password_input.Value)
    }
    if (error.length>0)
        e.preventDefult()
        error_message.innerText = error.join(".  ")
   
})

function getSignUpErrors(firstname, email, password, repeatpassword){
    let error = []
    if (firstname === '' || firstname==null){
        error.push ('Firstname is Required')
        firstname_input.parentElement.classList.add('incorrect')
    }
}

function getSignUpErrors(firstname, email, password, repeatpassword){
    let error = []
    if (email === '' || email==null){
        error.push ('Email is Required')
        email_input.parentElement.classList.add('incorrect')
    }

    if (password === '' || password==null){
        error.push ('password is Required')
       password_input.parentElement.classList.add('incorrect')
    }
    if (password !== repeatpassword){
        error.push('Password does not match, Re-enter')
        password_input.parentElement.classList.add('incorrect')
        repeatpassword_input.parentElement.classList.add('incorrect')
    }
    
    
    return Error; 
}

function getLoginFormError(email, password){
    let error = []
    if (email === '' || email==null){
        error.push ('Email is Required')
        email_input.parentElement.classList.add('incorrect')
    }

    if (password === '' || password==null){
        error.push ('password is Required')
       password_input.parentElement.classList.add('incorrect')
    }


    return error
}

const allInputs = [firstname_input, email_input, password_input, repeatpassword_input].filter(input=> input !=null)
allInputs.forEach(
   input =>  {
    input.addEventListener('input', ()=>{
        if(input.parentElement.classList.contains ('incorrect'))
        {
            input.parentElement.classList.remove('incorrect')
            error_message.innerText=''

        }
    })
   }
)
    
