const form = document.querySelector("#form-element")
const firstNameInput = document.querySelector("#firstName")
const lastNameInput = document.querySelector("#lastName")
const passwordInput = document.querySelector("#password")
const passwordConfirmInput = document.querySelector("#passwordConfirmation")
const errorsContainer = document.querySelector(".errors")
const errorsList = document.querySelector(".errors-list")

form.addEventListener("submit", e => {
    const errorMessages = []
    clearErrors()
    if(firstNameInput.value.length < 1) {
        errorMessages.push("Name must be at least 1 character long")
    }
    if(lastNameInput.value.length < 1) {
        errorMessages.push("Last name must be at least 1 character long")
    }
    if(passwordInput.value.length < 6) {
        errorMessages.push("Password must be at least 6 characters")
    }
    if(passwordConfirmInput.value !== passwordInput.value) {
        errorMessages.push("Passwords must match")
    }
    if(errorMessages.length > 0) {
        showErrors(errorMessages)
        e.preventDefault()
    }
})

function clearErrors() {
    while(errorsList.children[0] != null) {
        errorsList.removeChild(errorsList.children[0])
    }
    errorsContainer.classList.remove("show")
}

function showErrors(errorMessages) {
    errorMessages.forEach(errorMessage => {
        const li = document.createElement("li")
        li.innerText = errorMessage
        errorsList.appendChild(li)
    })
    errorsContainer.classList.add("show")
}