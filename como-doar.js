var botoesAbrir = document.querySelectorAll(".btnMenu");
var botoesFechar = document.querySelectorAll(".menuClose");
// Percorre todos os botões de abrir
botoesAbrir.forEach(function (botaoAbrir) {
    // Adiciona um evento de clique em cada botão
    botaoAbrir.addEventListener("click", function () {
        // Pega o elemento .container que contém o botão clicado
        var pergunta = botaoAbrir.parentElement;
        // Adiciona a classe "isOpen" no container
        // Essa classe faz a resposta aparecer através do CSS
        pergunta.classList.add("isOpen");
    });
});
botoesFechar.forEach(function (botaoFechar) {
    // Adiciona um evento de clique em cada botão
    botaoFechar.addEventListener("click", function () {
        // Pega o elemento .container que contém o botão clicado
        var pergunta = botaoFechar.parentElement;
        // Remove a classe "isOpen" do container
        // Assim, a resposta volta a ficar escondida
        pergunta.classList.remove("isOpen");
    });
});
