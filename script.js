const form = document.querySelector("#form");
const nameInput = document.querySelector ("#name");
const emailInput = document.querySelector ("#email");
const assuntoInput = document.querySelector ("#assunto");
const messageTextarea = document.querySelector ("#message");

/*console.log(form, nameInput, emailInput, assuntoInput, messageTextarea)*/

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;



//verificar se o nome está vazio//
    if(nameInput.value === "") {
        document.getElementById("name-invalid-error").style.display = "block";
        isValid = false;  
    } else {
        document.getElementById("name-invalid-error").style.display = "none";
    }

//verificar se o email está preenchido e válido//
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        document.getElementById("email-invalid-error").style.display = "block"; 
        isValid = false; 
    } else {
        document.getElementById("email-invalid-error").style.display = "none";
    }

//verificar se o assunto está preenchido//
    if(assuntoInput.value === "") {
        document.getElementById("assunto-invalid-error").style.display = "block";
        isValid = false;  
    } else {
        document.getElementById("assunto-invalid-error").style.display = "none";
    }

//verificar se o mensagem está preenchido//
    if(messageTextarea.value === "") {
        document.getElementById("message-invalid-error").style.display = "block"; 
        isValid = false; 
    } else {
        document.getElementById("message-invalid-error").style.display = "none";
    }


//se todos os campos estiverem corretamente preenchidos, envie o form//
    form.submit();
});


//função que valida email//
function isEmailValid(email) {
    //criar uma regex para validar email//
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}



