document.addEventListener('DOMContentLoaded', function () {
    const questionsSection = document.getElementById('questions');

    // Adiciona cada pergunta à seção de perguntas
    for (let i = 0; i < questions.length; i++) {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<strong>Pergunta ${i + 1}:</strong> ${questions[i]}`;
        questionsSection.appendChild(questionElement);
    }
});

// Lista de perguntas
const questions = [
    "O que significa HTML?",
    "Quais são os elementos de bloco em HTML?",
    "Qual é a diferença entre as tags div e span?",
    "Como criar uma lista não ordenada em HTML?",
    "Explique a diferença entre HTML e XHTML",
    "O que são atributos em HTML? Dê um exemplo.",
    "Como criar um link em HTML para abrir em uma nova janela?",
    "Qual a finalidade da tag meta em HTML?",
    "Como adicionar comentários em HTML?",
    "Explique a diferença entre as tags header, footer, article e section.",
    "O que significa CSS?",
    "Como se refere a uma classe em CSS?",
    "Explique a diferença entre margin e padding.",
    "O que é o modelo de caixa (box model) em CSS?",
    "Como centralizar um elemento em CSS?",
    "O que é um seletor em CSS?",
    "Explique a diferença entre display: block, display: inline e display: inline-block.",
    "Como aplicar estilos apenas para dispositivos móveis usando CSS?",
    "O que é um seletor filho (child selector) em CSS?",
    "Como criar uma animação simples em CSS?",
    "Como incluir um arquivo CSS em um documento HTML?",
    "Explique a diferença entre div e span em relação ao estilo.",
    "Como criar uma tabela em HTML e estilizá-la com CSS?",
    "O que é responsividade em design web?",
    "Como fazer um elemento flutuar à direita em CSS?",
    "Qual é a diferença entre position: relative e position: absolute?",
    "Como criar um menu de navegação horizontal usando HTML e CSS?",
    "O que são pseudo-classes em CSS? Dê alguns exemplos.",
    "Explique o conceito de float em CSS.",
    "Como criar um formulário em HTML e estilizá-lo com CSS?",
    "O que é flexbox e como funciona?",
    "Explique a diferença entre inline-block e inline-table.",
    "Como funciona o sistema de grades (grid) em CSS?",
    "O que é uma variável em CSS e como é declarada?",
    "Como criar uma transição suave (smooth transition) em CSS?",
    "Qual a diferença entre em e rem em CSS?",
    "O que é SASS e por que é usado?",
    "Como funciona o conceito de z-index em CSS?",
    "O que é o pré-processador LESS?",
    "Explique a diferença entre visibility: hidden e display: none em CSS."


    
    // ... adicione as demais perguntas aqui
];
