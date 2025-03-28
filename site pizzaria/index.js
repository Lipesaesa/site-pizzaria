function boasVindas() {
    alert("Bem-vindo à Pizzaria Rogério Ceni! 🍕");
}

window.onscroll = function () {
    let header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "darkred";
    } else {
        header.style.backgroundColor = "red";
    }
};

function horarioFuncionamento() {
    let agora = new Date();
    let hora = agora.getHours();
    let mensagem = (hora >= 18 && hora <= 23) ? "Estamos abertos! Faça seu pedido! 🍕" : "Estamos fechados no momento. Voltamos às 18h!";
    document.getElementById("status-loja").innerText = mensagem;
}

document.addEventListener("DOMContentLoaded", function () {
    horarioFuncionamento();
    let imagens = document.querySelectorAll(".img-pizza");

    imagens.forEach(img => {
        img.addEventListener("mouseover", function () {
            img.style.transform = "scale(1.1)";
            img.style.transition = "0.3s";
        });
        img.addEventListener("mouseout", function () {
            img.style.transform = "scale(1)";
        });
    });
});
