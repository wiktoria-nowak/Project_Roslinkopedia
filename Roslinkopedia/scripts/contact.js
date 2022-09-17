const username = document.querySelector("#username")
const email = document.querySelector("#email")
const message = document.querySelector("#message")
const sendBtn = document.querySelector(".send-btn")

const showError = (input, msg) => {
    const formBox = input.parentElement
    const errorMsg = formBox.querySelector(".error-text")

    formBox.classList.add('error')
    errorMsg.textContent = msg
}

const clearError = input => {
    const formBox = input.parentElement
    formBox.classList.remove("error")
}

const checkForm = input => {
    input.forEach(el => {
        if (el.value === "") {
            showError(el, el.placeholder + "!")
        } else {
            clearError(el)
        }
    })
}

const checkEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

    if (re.test(email.value)) {
        clearError(email)
    } else {
        showError(email, "Wpisz poprawanie email!")
    }
}

const checkErrors = () => {
    const allInputs = document.querySelectorAll('.form-box');
    let errorCount = 0;

    allInputs.forEach(el => {
        if (el.classList.contains('error')) {
            errorCount++;
        }
    })

    if (errorCount === 0) {
        allInputs.forEach(input => clearError(input));
        [username, email, message].forEach(el => {
            el.value = ''
        })
        alert("Wiadomość wysłana :)")
    }
}

sendBtn.addEventListener("click", () => {
    checkForm([username, email, message])
    checkEmail(email)
    checkErrors()
})