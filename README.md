# 🧠 Projeto Quiz Interativo</BR>
</BR>
Bem-vindo ao projeto de Quiz Interativo! Este é um projeto básico em HTML, CSS e JavaScript que simula um quiz de perguntas e respostas, ideal para iniciantes na programação. 🎉</BR>
</BR>

## 🚀 Funcionalidades</BR>
</BR>
* Iniciar o quiz com um botão de início.</BR>
* Exibir perguntas de forma aleatória a cada rodada.</BR>
* Embaralhar as alternativas de resposta para cada pergunta.</BR>
* Marcar visualmente respostas corretas e incorretas (✅ e ❌).</BR>
* Exibir a pontuação ao final do quiz com uma mensagem de desempenho.</BR>
</BR>

## 🎨 Layout
</BR>
Este projeto utiliza um estilo simples e limpo, com um layout centrado na página. O plano de fundo é um gradiente de cores suaves, criando uma experiência visual agradável. A interface foi projetada para ser fácil de usar e intuitiva.
</BR>

## 🛠️ Tecnologias Utilizadas</BR>
</BR>
* HTML: Estrutura da página e conteúdo principal.
* CSS: Estilização e layout da interface.
* JavaScript: Lógica do quiz, manipulação DOM e interação com o usuário.

## 📸 Demonstração
<!-- Você pode substituir pelo link de uma imagem ou gif do projeto em ação -->

## ⚙️ Como Usar
</BR>
1. Clone este repositório:</BR>
</BR>

```
   git clone https://github.com/seu-usuario/quiz-interativo.git
```
</BR>
2. Abra o arquivo index.html em seu navegador.
</BR>
3. Clique no botão Iniciar Quiz para começar a responder às perguntas.
</BR>
4. Escolha uma resposta para cada pergunta e clique em Próxima Pergunta para continuar.
</BR>
5. No final do quiz, você verá sua pontuação e uma mensagem de desempenho baseada na sua pontuação.
</BR>

## 📂 Estrutura do Projeto
</BR>

```
quiz-interativo/
├── index.html      # Estrutura HTML da página
├── style.css       # Estilos CSS para layout e aparência
├── index.js        # Lógica do quiz e manipulação DOM
└── README.md       # Documentação do projeto
```

## 📜 Exemplo de Código
```
function startGame() {
  $startGameButton.classList.add("hide");
  $questionsContainer.classList.remove("hide");
  shuffleArray(questions); // Embaralha as perguntas
  displayNextQuestion();
}
```

## 🎉 Contribuição
Sinta-se à vontade para contribuir com melhorias, correções ou novos recursos para o projeto. Basta abrir uma pull request ou criar uma issue com sua sugestão!

# 📝 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo.
