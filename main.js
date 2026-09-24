function verificarResposta(correta) {

    const resultado = document.getElementById("resultado");

    resultado.style.display = "block";

    if (correta) {

        resultado.className = "resultado correto";

        resultado.innerHTML =
            "✅ Muito bem! A inteligência humana é construída por meio de experiências, emoções, aprendizagem e criatividade.";

    } else {

        resultado.className = "resultado incorreto";

        resultado.innerHTML =
            "❌ Tente novamente! Pense nas diferenças entre experiências humanas e o processamento de dados pela IA.";

    }
}
