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
[gif](C:\Users\lucia\Projetos de Estudos\proj2\assents\chrome_zKZb86YBXa.gif)

## ⚙️ Como Usar
</BR>
1. Clone este repositório:</BR>
</BR>

```
   git clone https://github.com/seu-usuario/quiz-interativo.git
```
</BR>
2. Configure um Servidor Local</BR>
</BR>
* Para rodar o quiz corretamente em um servidor local, recomendamos usar a extensão Live Server no Visual Studio Code (VS Code):</BR>
</BR>
1. Abra o projeto no VS Code.</BR>
- No VS Code, instale a extensão Live Server:</BR>
- Vá até a aba Extensões (ícone de quadrado no menu lateral).</BR>
- Pesquise por "Live Server" e instale a extensão criada por Ritwick Dey.</BR>
</BR>
- Com o projeto aberto, clique com o botão direito no arquivo index.html e selecione Open with Live Server.</BR>
- O Live Server abrirá o projeto automaticamente no seu navegador padrão, em um endereço local (geralmente http://127.0.0.1:5500/).</BR>
</BR>
3. Usando o Quiz</BR>
</BR>
* Clique em "Iniciar Quiz" para começar a responder as perguntas.</BR>
* Após selecionar uma resposta para uma pergunta, o quiz bloqueará as opções, garantindo que você não altere a resposta depois.</BR>
* Clique em "Próxima Pergunta" para continuar até completar as 10 questões.</BR>
* No final, o quiz exibirá uma mensagem de desempenho com uma avaliação divertida baseada no número de respostas corretas.</BR>
* Caso deseje, clique em "Fazer Novo teste?" para refazer o quiz. As perguntas serão reorganizadas aleatoriamente e as respostas também serão embaralhadas, proporcionando uma nova experiência.</BR>

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
