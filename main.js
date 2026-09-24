function verificarResposta(correta) {

    const resultado = document.getElementById("resultado");

    resultado.style.display = "block";

    if (correta) {

        resultado.className = "resultado correto";

        resultado.innerHTML =
            "⚡ RESPOSTA CORRETA! Você identificou a diferença entre a inteligência humana e a inteligência artificial.";

    } else {

        resultado.className = "resultado incorreto";

        resultado.innerHTML =
            "💀 RESPOSTA INCORRETA! Reflita novamente sobre experiências, emoções, criatividade e processamento de dados.";

    }
}
