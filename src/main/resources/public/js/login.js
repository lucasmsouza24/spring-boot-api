// variables
const inputEmail = document.querySelector("#idEmail");
const inputPassword = document.querySelector("#idPassword");
const btn = document.querySelector("#idBtn");

// btn click event listener
btn.addEventListener("click", async (evt) => {
    evt.preventDefault()
    if(isValidInputs(inputEmail, inputPassword)) {
        const {data: response} = await axios.post("/user/auth", {
            email: inputEmail.value, 
            password: inputPassword.value
        })
        
        // displaying login response
        window.alert(response ? "success auth" : "auth fail");
    }
})

// verify if inputs has valid values
function isValidInputs() {
    let validInputs = 0;

    for(let input of arguments) {
        if (input.value != "" && input.value.length > 3) {
            validInputs++;
        }
    }

    return arguments.length === validInputs
}