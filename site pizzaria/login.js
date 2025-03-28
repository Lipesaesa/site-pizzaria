document.addEventListener("DOMContentLoaded", function() {
    const signUpBtn = document.getElementById("sign-up-btn");
    const signInBtn = document.getElementById("sign-in-btn");
    const firstContent = document.querySelector(".first-content");
    const secondContent = document.querySelector(".second-content");
    const signUpForm = document.getElementById("signup-form");

    // pra eu alternar de sing up pra sign in
    signUpBtn.addEventListener("click", function() {
        firstContent.style.display = "none";
        secondContent.style.display = "flex";
    });

    signInBtn.addEventListener("click", function() {
        firstContent.style.display = "flex";
        secondContent.style.display = "none";
    });

   
    signUpForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        if (name === "" || email === "" || password === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Por favor, insira um e-mail válido!");
            return;
        }

        if (password.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres!");
            return;
        }

        alert("Cadastro realizado com sucesso!");
        signUpForm.reset(); // Limpa os campos após o envio
    });
});
