
const formulario = document.getElementById("quiz");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    try {
        const nome = document.getElementById("nome").value.trim();
        const filmesTexto = document.getElementById("filmes").value;
        const bananasTexto = document.getElementById("bananas").value;

        if (nome === "" || filmesTexto === "" || bananasTexto === "") {
            throw new Error("Preencha todos os campos!");
        }

        const filmes = Number(filmesTexto);
        const bananas = Number(bananasTexto);
    
        if (!Number.isInteger(filmes) || !Number.isInteger(bananas)) {
            throw new Error("Digite apenas números inteiros!");
        }
        if (filmes < 0 || bananas < 0) {
            throw new Error("Não são permitidos números negativos!");
        }
        if (filmes > 10 || bananas > 20) {
            throw new Error("Digite até 10 filmes e até 20 bananas!");
        }

        const pontos = (filmes * 10) + (bananas * 2);

        let nivel;
        if (pontos <= 20) {
            nivel = "Fã iniciante!";
        } else if (pontos <= 60) {
            nivel = "Super fã!";
        } else {
            nivel = "Fã número 1 dos Minions!";
        }
        resultado.className = "sucesso";
        resultado.textContent =
            "Olá, " + nome + "! Você fez " + pontos +
            " pontos. Seu resultado é: " + nivel + " !!";
    } catch (erro) {
        resultado.className = "erro";
        resultado.textContent = erro.message;

    }

});
