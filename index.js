const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Você é o bichão :)"
      break
    case (performance >= 70):
      message = "Rasoável :@"
      break
    case (performance >= 50):
      message = "Na espinha :/"
      break
    default:
      message = "Você é uma mula :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: 'Os princípios e critérios ergonômicos são elementos que desenvolvedores devem seguir de modo a garantir uma experiência mais agradável e interessante para o usuário no seu contato com a interface de qualquer sistema. Existem diversos critérios para isso. Assinale a alternativa que contém 3 (três)destes critérios:',
    answers: [
      { text: 'A) Condução, Carga de Trabalho Controle Explícito. ', correct: true },
      { text: 'B) Adaptabilidade, Flexibilidade e Auditabilidade. ', correct: false },
      { text: 'C) Carga de Trabalho, Condução Verificabilidade. ', correct: false },
      { text: 'D) Controle Explícito, Adaptabilidade e Verificabilidade. ', correct: false },
      { text: 'E) Condução, Auditabilidade, Verificabilidade. ', correct: false},
    ]
  },
  {
    question: '(IBGE/2013 A ergonomia cognitiva nas interfaces de programas de design gráfico tornou-se uma das principais contribuições do que se convencionou chamar de revolução digital. A facilitação do trabalho e a concepção do conceito de sistema amigável (user-friendly software) popularizaram tais programas a ponto de causarem uma reestruturação nos ambientes profissionais ligados às áreas gráficas.',
    answers: [
      { text: 'A) Abundância de ícones operacionaisreforçados pela redundância presente nos menus, nas barras de ferramentas e nos atalhos de teclado.', correct: true },
      { text: 'B) Linguagem lacônica e clara, que reduz a quantidade de ruídos e problemas de comunicação entre homem e máquina a quase zero.', correct: false },
      { text: 'C) Pictogramas e símbolos que, além de comunicar, embelezam a tela do computador, tornando o trabalho uma experiência prazerosa.', correct: false },
      { text: 'D) Diversos tipos de famílias tipográficas facilmente acessíveis que auxiliam na hora de compor um texto e variar fontes.', correct: false },
      { text: 'E) Periféricos ergonômicos, como mouse, teclado ou caneta designer dobre o tempo de trabalho sem desconforto.', correct: false},
    ]
  },
  {
    question: 'Uma plataforma de e-commerce está sendo redesenhada para oferecer uma melhor experiência ao usuário. A equipe de design decide incorporar elementos que permitam aos usuários personalizar a interface de acordo Que aspecto da ergonomia em IHC está sendo enfatizado nessa decisão?',
    answers: [
      { text: 'A) Homogeneização da interface.', correct: false },
      { text: 'B) Limitação de opções ao usuário.', correct: false },
      { text: 'C) Adaptabilidade da interface.', correct: true },
      { text: 'D) Uniformidade dos elementos de design.', correct: false },
      { text: 'E) Centralização do controle pela equipe de design.', correct: false }
    ]
  },
  {
    question: 'Em um novo software de gestão de projetos, os desenvolvedores incluíram um sistema robusto de ajuda e tutoriais. Eles pretendem facilitar o aprendizado do software pelos novos usuários. Qual característica de ergonomia em IHC está sendo destacada pelo software',
    answers: [
      { text: 'A) Necessidade de treinamento extensivo.', correct: false },
      { text: 'B) Suporte ao usuário e aprendizado facilitado.', correct: true },
      { text: 'C) Dependência de assistência externa.', correct: false },
      { text: 'D) Foco exclusivo em usuários experientes.', correct: false },
      { text: 'E) Complexidade incrementada na interface.', correct: false }
    ]
  },
  {
    question: 'Os objetos de interação são elementos nas interfaces digitais que permitem aos usuários acessarem e manipularem conteúdo necessário à execução de suas tarefas, sendo próprios para isso. Existem diversos tipos de objetos de interação. Assinale abaixo a alternativa que contém somente objetos de interação: Como podemos criar uma função no JavaScript?',
    answers: [
      { text: 'A) Janelas, Menus e Textos.', correct: false },
      { text: 'B) Entradas de dados, Textos e Menus. ', correct: false },
      { text: 'C) Botões, Listas de Seleção e Textos.', correct: false },
      { text: 'D) Janelas, Combo Boxes, Barra de Ferramentas.', correct: true },
      { text: 'E) Caixas de Mensagem, Janelas e Entradas de Dados. ', correct: false }
    ]
  },
  {
    question: 'SELECON/2022  Adaptada) No que se refere à Interface Homem-Máquina, um termo é definido como a qualidade que um produto apresenta de poder ser utilizado por usuários específicos para atingir determinadas metas com eficiência, eficácia e satisfação num contexto de uso específico. Em resumo, os sistemas devem ser flexíveis e fáceis de usar e aprender. Além disso, devem despertar uma boa atitude nas pessoas. Esse termo é denominado.',
    answers: [
      { text: 'A) Design.', correct: false },
      { text: 'B) Usabilidade.', correct: true },
      { text: 'C) Interatividade.',  correct: false }, 
      { text: 'D) Acessibilidade.', correct: false },
      { text: 'E) Facilidade.', correct: false },
    ]
  },
  {
    question: '(CONSULPAM/2022  Adaptada) A Engenharia de Requisitos agrupa as ações voltadas para a identificação das demandas dos usuários relacionadas a uma solução. Uma das técnicas para o levantamento desses requisitos, caracteriza-se por formulários com perguntas bem definidas são aplicadas aos usuários do sistema, objetivando obter informações quantificáveis para identificar requisitos, sendo comumente aplicado em cenários onde existem distanciamentos geográficos consideráveis ou em domínios específicos para obter mensurações. Assinale a alternativa que apresenta o nome desta técnica para o levantamento de requisito.',                
     answers: [
      { text: 'A) Entrevista.', correct: false },
      { text: 'B) Observação.', correct: false },
      { text: 'C) Questionário.',  correct: true }, 
      { text: 'D) Encontro Facilitador.', correct: false },
      { text: 'E) Google Meet.', correct: false },
    ]
  },
{
  question: 'Em um projeto de interface web para um aplicativo de compras online, a equipe de desenvolvimento se concentra na usabilidade e na experiência do usuário. Eles aplicam princípios de IHC para criar uma interface intuitiva e de fácil navegação. O foco está na clareza das informações e na facilidade de realização de tarefas comuns. Qual é o principal objetivo ao aplicar os princípios de IHC neste contexto',                
   answers: [
    { text: 'A) Aumentar a velocidade de carregamento do aplicativo.', correct: false },
    { text: 'B) Melhorar a segurança das transações online.', correct: false },
    { text: 'C) Facilitar a interação do usuário com a interface.',  correct: true }, 
    { text: 'D) Ampliar o alcance de marketing do aplicativo.', correct: false },
    { text: 'E) Reduzir os custos de desenvolvimento.', correct: false },
  ]
   },
{
 question: 'Existem diversos tipos de processo de design de interface. Qual das alternativas abaixo apresenta um deles?',                
   answers: [
    { text: 'A) Engenharia de Requisitos.', correct: false },
    { text: 'B) Usabilidade de sistemas.', correct: false },
    { text: 'C) Prototipagem.',  correct: false }, 
    { text: 'D) Cenários de Uso.', correct: false },
    { text: 'E) Ciclo de vida em estrela.', correct: true },
  ]
   },
 {
 question: 'FGV/2021 Considere que a empresa XPTO, uma desenvolvedora brasileira de jogos de videogame, esteja planejando realizar o lançamento de um novo jogo no final do ano. Pondera-se, entretanto, que a XPTO ainda não decidiu o tema principal do jogo, tendo estabelecido somente uma estimativa inicial de orçamento.  Visando à escolha do tema do jogo, os diretores da XPTO se reuniram em um hotel fazenda para discutir o projeto. Em um momento de descontração, realizaram uma dinâmica na qual cada um falava rapidamente qualquer ideia que tivesse, sem qualquer tipo de crítica ou julgamento do grupo. Essas ideias eram anotadas e, posteriormente, analisadas e debatidas, até a escolha da melhor alternativa. Ao fim do encontro, o tema do jogo estava decidido. Assinale a opção que indica a técnica de decisão utilizada pelos diretores da empresa XPTO.',                
   answers: [
    { text: 'A) Benchmarking.', correct: false },
    { text: 'B) Brainstorming.', correct: true },
    { text: 'C) Análise do campo de forças.',  correct: false }, 
    { text: 'D) Árvore de decisões.', correct: false },
    { text: 'E) Análise do ponto de equilíbrio.', correct: false },
  ]
   },
  {
 question: 'Em termos de tecnologia da informação, quando falamos em design de interface do usuário, referimo-nos ao design de softwares, sites ou aplicativos. Na verdade, trata-se de programar a aparência das coisas para facilitar a usabilidade e a experiência do usuário. Disponível em: https://www.dialhost.com.br/blog/o-que-e design-de-interface-do-usuario/. Acesso em: 23 set. 2022. Qual das alternativas abaixo melhor define o design baseado em cenários?',                
   answers: [
    { text: 'A) É uma história sobre pessoas executando uma atividade.', correct: true },
    { text: 'B) É um processo de criação de janelas modais.', correct: false },
    { text: 'C) É uma ferramenta interessante, mas de alto custo.',  correct: false }, 
    { text: 'D) É uma tarefa realizada unicamente pela equipe de designers.', correct: false },
    { text: 'E) Cenário lógico das ações do usuário na interface.', correct: false },
  ]
   },
 {
 question: 'Projetos de software podem apresentar diversas dificuldades, que vão desde questões técnicas até problemas relacionados à gestão do projeto e às relações interpessoais da equipe envolvida. Qual método ágil de desenvolvimento é amplamente utilizado em projetos de software?',                
   answers: [
    { text: 'A) Ruby.', correct: false },
    { text: 'B)  Python.', correct: false },
    { text: 'C) Sapphire.',  correct: false }, 
    { text: 'D) Routinator.', correct: false },
    { text: 'E) Scrum.', correct: true },
  ]
   },
 {
 question: 'Em um projeto de interface humano computador, uma equipe adotou a técnica de prototipação de baixa fidelidade. Eles utilizaram papel e caneta para criar representações iniciais do design da interface, facilitando discussões rápidas e ajustes conforme o feedback dos usuários. Qual é o principal benefício da utilização de protótipos de baixa fidelidade em projetos de interface humano-computador?',                
   answers: [
    { text: 'A) Aumento da precisão dos detalhes gráficos.', correct: false },
    { text: 'B) Facilitação da colaboração e feedback rápido.', correct: true },
    { text: 'C) Redução do tempo de desenvolvimento de software.',  correct: false }, 
    { text: 'D) Melhoria na performance técnica do sistema.', correct: false },
    { text: 'E)  Aumento da segurança dos dados do usuário.', correct: false },
  ]
   },
 {
 question: '(UNIUV/2015  Adaptada) Quando um grupo se  reúne para discutir ideias, é possível obter diferentes perspectivas, opiniões e experiências de um conjunto diverso de pessoas, o que pode levar a soluções mais criativas e eficazes. Acerca dos conceitos de IHC, é correto definir brainstorming como:',                
   answers: [
    { text: 'A) Reunião de Diretores onde são decididas as metas para serem atingidas no semestre.', correct: false },
    { text: 'B) Reunião do departamento de Marketing, que vai planejar uma nova campanha para a Empresa.', correct: false },
    { text: 'C)  Reunião dos Colaboradores para definirem as festividades de final de ano da Empresa.',  correct: false }, 
    { text: 'D) Reunião desenvolvida para estimular a produção de ideias. O Coordenador seleciona e avalia as sugestões recebidas pelos Colaboradores.', correct: true },
    { text: 'E)  Reunião social que estimula a comunicação entre a Gerência e os Colaboradores.', correct: false },
  ]
   },
 {

 question: 'O ciclo de vida é a estrutura contendo processos, atividades e tarefas envolvidas no desenvolvimento, operação e manutenção de um produto de software, abrangendo a vida do sistema, desde a definição de seus requisitos até o término de seu uso. Disponível em: https://www.devmedia.com.br/ciclos-de-vida do-software/21099. Acesso em: 23 set. 2022. No Ciclo de Vida Estrela, a atividade central é:',                
   answers: [
    { text: 'A) Implementação.', correct: false },
    { text: 'B) Análise de Tarefas.', correct: false },
    { text: 'C) Avaliação.',  correct: true }, 
    { text: 'D) Especificação de Requisitos.', correct: false },
    { text: 'E) Prototipação.', correct: false },
  ]
   },
 {

 question: 'Avaliação de usabilidade é parte integrante do processo de design de interfaces com o usuário. As técnicas de avaliação existentes  podem ser categorizadas de várias formas, mas uma delas focaliza se a avaliação é feita envolvendo ou não usuários. Considere as afirmações abaixo. I  Avaliação Heurística é uma técnica de avaliação que NÃO envolve usuários. II  Inspeção é uma técnica de avaliação que NÃO envolve usuários. III Estudo de Campo é uma técnica de avaliação que NÃO envolve usuários. Quais estão corretas?',                
   answers: [
    { text: 'A) Apenas I.', correct: false },
    { text: 'B) Apenas I e III.', correct: false },
    { text: 'C) Apenas I e II.',  correct: true }, 
    { text: 'D) I, II e III.', correct: false },
    { text: 'E) Apenas II e III.', correct: false },
  ]
   },
 {

 question: 'A usabilidade é capacidade do sistema em fazer com que o usuário tenha sucesso na execução de suas tarefas. Fácil aprendizagem, utilização eficiente e gestão de erros são pontos fundamentais para que o usuário perceba a boa usabilidade. Disponível em: https://www.teclogica.com.br/o que-e-usabilidade/. Acesso em: 23 set. 2022. Assinale a alternativa que contém somente parâmetros observados durante a técnica Ensaios de Interação.',                
   answers: [
    { text: 'A) Situações de impasse, dados objetivos sobre a produtividade e contagem da avaliação.', correct: false },
    { text: 'B) Sistematização, facilidade de uso e poder de dissuasão.', correct: false },
    { text: 'C)  Amostra de usuários, local de realização e verbalizações do usuário.',  correct: true }, 
    { text: 'D) Análise contextual, diagnóstico final e relatório do ensaio.', correct: false },
    { text: 'E) Adequabilidade, poder de restrução e abrangência.', correct: false },
  ]
   },
 {

 question: '(IBFC/2014  Adaptada) Usabilidade é a medida da facilidade com que as pessoas podem utilizar uma interface de usuário para atingir seus objetivos de forma eficiente, eficaz e satisfatória. Identifique o termo técnico abaixo que está diretamente relacionado com os conceitos de ergonomia e usabilidade:',                
   answers: [
    { text: 'A) ISA.', correct: false },
    { text: 'B) IHC.', correct: true },
    { text: 'C) IGP.',  correct: false }, 
    { text: 'D) IRQ.', correct: false },
    { text: 'E) IPG.', correct: false },
  ]
   },
 {

 question: '(UFRJ/2021 Assinale, dentre as alternativas a seguir, uma das heurísticas de Nielsen, responsável por nortear as definições básicas de usabilidade na área de Interface Homem Máquina.',                
   answers: [
    { text: 'A) Transparência quando na ocorrência de erros..', correct: false },
    { text: 'B) Limitação de controle para evitar erros.', correct: false },
    { text: 'C) Visualização do estado do sistema.',  correct: true }, 
    { text: 'D) Memorização em vez de reconhecimento.', correct: false },
    { text: 'E)  Estética e design maximalista.', correct: false },
  ]
   },
 {

 question: '(VUNESP/2022  Adaptada) Testes de software são uma prática fundamental no desenvolvimento de software que consiste em executar um programa com o objetivo de encontrar defeitos, falhas ou erros no software. Considerando os chamados testes de unidade feitos no software de um sistema computacional, marque a alternativa correta.',                
   answers: [
    { text: 'A) Testam suas interfaces que recebem e transmitem dados.', correct: true },
    { text: 'B) Testam apenas um dos caminhos existentes em cada unidade.', correct: false },
    { text: 'C) Não testam unidades com código objeto muito reduzido.',  correct: false }, 
    { text: 'D) As estruturas de dados utilizadas em cada unidade são testadas apenas quando ocorrer sua integração com outras unidades.', correct: false },
    { text: 'E) Têm seu foco somente nos limites presentes nos testes de condições.', correct: false },
  ]
   },
 {

 question: '(ESAF/2015  Adaptada) Segundo Jakob Nielsen, um pesquisador reconhecido e precursor na área de usabilidade, a engenharia de usabilidade visa ao desenvolvimento de interfaces com determinados atributos. Em relação a esses atributos, marque a alternativa correta:',                
   answers: [
    { text: 'A) produtividade na realização de atividades está relacionada diretamente com o desempenho do aplicativo de software.', correct: false },
    { text: 'B) facilidade de aprendizado significa que deve ser fácil para o usuário aprender os conteúdos ensinados no aplicativo de software.', correct: false },
    { text: 'C) retenção do aprendizado com uso intermitente significa que o software deve permitir que o usuário consiga lembrar os conteúdos ensinados mesmo quando fica sem usá-lo por um período relativamente longo de tempo.',  correct: false }, 
    { text: 'D) prevenção de erros do usuário significa que o sistema deve prevenir erros cometidos pelo usuário quando o utiliza em suas atividades.', correct: true },
    { text: 'E) todos os atributos devem ter o mesmo peso e relevância, independentemente do tipo de sistema.', correct: false },
  ]
   },
 {

 question: 'Um novo aplicativo de gerenciamento de tarefas foi lançado, visando atender às necessidades de profissionais autônomos. Durante a avaliação da interface, a equipe se concentrou em entender como esses profissionais interagem com as funcionalidades do aplicativo para melhorar a eficiência no gerenciamento de suas tarefas. Qual aspecto da interface é mais relevante na avaliação de um aplicativo de gerenciamento de tarefas para profissionais autônomos?',                
   answers: [
    { text: 'A) Integração com redes sociais.', correct: false },
    { text: 'B) Capacidade de personalização da interface.', correct: true },
    { text: 'C) Número de idiomas disponíveis.',  correct: false }, 
    { text: 'D) Opções de compartilhamento de tarefas.', correct: false },
    { text: 'E)  Qualidade dos gráficos de desempenho.', correct: false },
  ]
   },
 {

 question: 'Segundo a ISO 9241 11, usabilidade é a capacidade que um produto tem de ser usado por usuários específicos para atingir objetivos específicos com eficácia, eficiência e satisfação em contexto específico de uso. Disponível em: https://www.neomind.com.br/blog/a importancia-da-usabilidade-em-software/. Acesso em: 23 set. 2022. Acerca dos conceitos da avaliação de interface humano-computador, analise as afirmativas sobre a técnica de Ensaio de Interação e marque a alternativa correta.',                
   answers: [
    { text: 'A) Uma desvantagem de realizar ensaios de interação com uso de software e com a presença de usuários é o baixo custo de investimento necessário.', correct: false },
    { text: 'B) Quanto maior for o número de usuários envolvidos no ensaio de interação, maior o número de problemas de usabilidade que serão encontrados pelo avaliador.', correct: false },
    { text: 'C) Para realizar um ensaio de interação, deve-se somente: planejar o ensaio e coletar os resultados.',  correct: false }, 
    { text: 'D) Uma vantagem de realizar ensaios de interação em ambiente de laboratório é a possibilidade de ocorrerem interferências durante sua execução.', correct: false },
    { text: 'E)  Durante uma sessão de ensaios de interação, o comportamento dos usuários pode ser observado e comparado com os outros usuários que realizam uma mesma tarefa.', correct: true },
  ]
   },
 {

 question: '(Avança SP/2022  Adaptada) Uma lei é um conjunto de regras e normas estabelecidas por uma autoridade competente, seja ela legislativa, executiva ou judiciária. A lei tem como objetivo regular o comportamento das pessoas e das instituições, promover a justiça, a ordem e a segurança na sociedade. Segundo a Lei 13.146/15, o Estatuto da Pessoa com Deficiência, entende-se por desenho universal:',                
   answers: [
    { text: 'A) Arte de representar, ou criar formas, utilizando materiais como lápis, carvão, pincel. Diferencia-se da pintura e da gravura, por ser considerado tanto como processo quanto como resultado artístico, uma obra bidimensional composta por linhas, pontos e formas.', correct: false },
    { text: 'B) Norma determinada e aprovada, consensualmente pela maioria, ou por uma autoridade, que é usada como base para estabelecer uma comparação. Aquilo que serve para ser imitado como modelo; protótipo.', correct: false },
    { text: 'C) É um princípio, um preceito, uma norma, criada para estabelecer as regras que devem ser seguidas, é um ordenamento.',  correct: false }, 
    { text: 'D) Concepção de produtos, ambientes, programas e serviços a serem usados por todas as pessoas, sem necessidade de adaptação ou de projeto específico, incluindo os recursos de tecnologia assistiva.', correct: true },
    { text: 'E)  Um conjunto de requisitos e especificações, que fornecem diretrizes para que produtos, processos ou serviços em uma empresa atendam a qualidade esperada.', correct: false },
  ]
   },
 {

 question: 'Em 2019, segundo a Pesquisa Nacional de Saúde PNS, 17,3 milhões de pessoas com dois anos ou mais de idade 8,4% dessa população) tinham alguma das deficiências investigadas, e cerca de 8,5 milhões 24,8%) de idosos estavam nessa condição. Disponível em: https://censos.ibge.gov.br/2013-agencia-de noticias/releases/31445-pns-2019-pais-tem-173-milhoes-de pessoas-com-algum-tipo-de-deficiencia.html Acesso em: 26 set. 2022. O design universal respeita a diversidade humana e promove a inclusão de todas as pessoas em todas as atividades da vida. Acerca dos princípios e diretrizes do desenho universal recomendados pelo W3C.BR, assinale a alternativa que melhor descreve o quarto princípio.',                
   answers: [
    { text: 'A) Flexibilidade de uso: atende a uma ampla gama de indivíduos, mas deixa que o conteúdo de cada site possa ser ajustado às preferências e habilidades individuais.', correct: false },
    { text: 'B) Informação perceptível: fornece de forma eficaz a informação necessária, quaisquer que sejam as condições ambientais/físicas existentes ou as capacidades sensoriais do usuário.', correct: true },
    { text: 'C) Uso simples e baseado na experiência: fácil de compreender e totalmente voltado à experiência de cada usuário, de seus conhecimentos, de suas aptidões linguísticas e do seu nível de concentração.',  correct: false }, 
    { text: 'D)  Prevenção ao erro: não permite nenhum recurso que possa acarretar em ações acidentais ou involuntárias de usuários com todos os tipos de deficiências, incluindo de estatura, de mobilidade e de postura.', correct: false },
    { text: 'E)  Assistência adicional: os objetos e ambientes utilizados nos sites devem ser projetados de forma que facilitem a assistência externa ao usuário, de acordo com suas limitações motoras.', correct: false },
  ]
   },
 {

 question: 'Acessibilidade Digital é a eliminação de barreiras na Web. O conceito pressupõe que os sites e portais sejam projetados de modo que todas as pessoas possam perceber, entender, navegar e interagir de maneira efetiva com as páginas. Disponível em: https://www.gov.br/governodigital/pt br/acessibilidade-digital Acesso em: 26 set. 2022. São consideradas dimensões de Acessibilidade:',                
   answers: [
    { text: 'A) Urbanísticas, arquitetônicas, nos transportes, nas comunicações e na informação, atitudinais e tecnológicas.', correct: false },
    { text: 'B)Arquitetônica, metodológica, instrumental, programática, atitudinal e comunicacional.', correct: true },
    { text: 'C) Equitativo, flexível, simples e intuitivo.',  correct: false }, 
    { text: 'D) Programáticas, de locomoção, de atitude, comunicacional e tecnológica.', correct: false },
    { text: ' Arquitetônica, equitativo, comunicacional, robusto e perceptível.', correct: false },
  ]
   },
 {

 question: 'FAFIPA/2019  Adaptada) Um novo relatório indica que 99% dos sites que estão ativos no Brasil não são acessíveis para pessoas com deficiência. O levantamento foi realizado pela BigData Corp, empresa especializada em trabalhar com um grande conjunto de dados Big Data), e o Movimento Web Para Todos MWPT. O Brasil possui atualmente mais de 24 milhões de portais registrados. No entanto, apenas 14 milhões são ativos, ou seja, endereços atualizados frequentemente e que foram o foco deste estudo. De todos, somente 0,61% dos sites passaram em testes de acessibilidade, e 99,39% tiveram pelo menos uma falha que dificulta a navegação de pessoas com deficiência. Sites governamentais - que possuem ".gov.br" no domínio  também foram analisados e o resultado tampouco é positivo: apenas 0,34% foram aprovados. Isso significa que 99,66% dos portais de prefeituras, estados ou ministérios, por exemplo, não estão completamente acessíveis. A pesquisa avaliou questões como linguagem HTML, problemas em formulários, links e a presença de descrição de imagens, recurso que permite a explicação de fotografias para pessoas com deficiência visual. Práticas consideradas adequadas estão disponíveis nas Diretrizes de Acessibilidade para Conteúdo Web WCAG 2.1, mantida pela World Wide Web Consortium W3C, organização mundial de padronização da web.  "Coisas simples, como acessar aplicativos de relacionamentos,  consultar preços e entrar na conta bancária podem ser feitas com o celular ou no desktop, mas algumas dessas tecnologias são excludentes para pessoas com deficiência", afirma Simone Freire, idealizadora do MWPT. "O mundo digital precisa derrubar as barreiras de navegação para melhorar o acesso de todas as pessoas." Texto adaptado de: https://revistagalileu.globo.com/Tecnologia/noticia/2019/10/menos de-1-dos-sites-brasileiros-saoacessiveis-para-pessoas-com deficiencia.html. Acesso em 06 de novembro de 2019. De acordo com o texto, é CORRETO afirmar que:',                
   answers: [
    { text: 'A) Apenas 2% dos sites do Brasil são destinados às pessoas com necessidades especiais.', correct: false },
    { text: 'B) A acessibilidade digital viabilizou novas oportunidades às pessoas com deficiência.', correct: false },
    { text: 'C) Portais brasileiros ainda não são completamente acessíveis para pessoas com deficiência.',  correct: true }, 
    { text: 'D) Sites governamentais se sobressaem em relação aos demais sites analisados, por apresentarem menores problemas de acesso.', correct: false },
    { text: 'E) Os sites brasileiros estão em processo de transformação para atender um novo público.', correct: false },
  ]
   },
 {

 question: 'A World Wide Web, também conhecida como WWW ou simplesmente Web, é um sistema de informação baseado em hipertexto que permite o acesso a documentos interconectados e vinculados pela internet. Foi desenvolvida por qual pesquisador?',                
   answers: [
    { text: 'A) Bill Gates - cofundador da Microsoft e um dos empresários mais ricos do mundo.', correct: false },
    { text: 'B) Steve Jobs - cofundador da Apple e um dos principais responsáveis pelo desenvolvimento de produtos como o Macintosh, iPod, iPhone e iPad.', correct: false },
    { text: 'C) Mark Zuckerberg - cofundador do Facebook, uma das redes sociais mais populares do mundo.',  correct: false }, 
    { text: 'D) Ada Lovelace - considerada a primeira programadora de computador da história, foi uma matemática britânica que trabalhou com o inventor Charles Babbage.', correct: false },
    { text: 'E) Tim Berners-Lee - reconhecido por ter desenvolvido o primeiro servidor web, a primeira biblioteca de hipertexto e a primeira linguagem para criação de páginas web.', correct: true },
  ]
   },
 {

 question: '(FAU/2019) No que dispõe o Estatuto da Pessoa com Deficiência, a possibilidade e condição de alcance para utilização, com segurança e autonomia, de espaços, transportes, informação e comunicação, correspondem a:',                
   answers: [
    { text: 'A) Acessibilidade.', correct: true },
    { text: 'B) Desenho universal.', correct: false },
    { text: 'C) Ajuda técnica.',  correct: true }, 
    { text: 'D) Barreiras urbanísticas.', correct: false },
    { text: 'E) Adaptações razoáveis.', correct: false },
  ]
   },
 {

 question: 'O desenvolvedor de conteúdo (código) Web é o profissional responsável pela codificação semântica do conteúdo Web. Qual a dica de boas práticas pode apoiar este profissional no cumprimento dos requisitos das chamadas Diretrizes de Acessibilidade de Conteúdo da Web (WCAG):',                
   answers: [
    { text: 'A) Forneça títulos redundantes e exclusivos.', correct: false },
    { text: 'B) Forneça saturação suficiente entre o primeiro e o segundo plano de uma imagem.', correct: false },
    { text: 'C) Utilize a validação CAPTCHA sempre que possível.',  correct: false }, 
    { text: 'D) Descarte transcrições e legendas para multimídia, optando pela utilização de recursos mais interativos.', correct: false },
    { text: 'E) Associe um rótulo a cada campo de entrada de um formulário.', correct: true },
  ]
   },
 {

 question: 'Qual a função do componente "Agentes de Usuário" quando uma pessoa cega acessa um texto alternativo com imagens com apoio de um software leitor de tela:',                
   answers: [
    { text: 'A) Ajudam a verificar se existe erro semântico.', correct: false },
    { text: 'B) Fornecem uma interface visual para o texto alternativo com diferentes formas de apresentação.', correct: false },
    { text: 'C) Fornecem uma interface humana e de máquina para o texto alternativo.',  correct: true }, 
    { text: 'D) Promovem a disseminação do conhecimento.', correct: false },
    { text: 'E) Definem como implementar atributos assistivos.', correct: false },
  ]
   },
 {

 question: 'Para que a Web seja acessível a pessoas com deficiência, vários componentes de desenvolvimento Web e ferramentas de interação devem ser coordenados, dentre os quais:',                
   answers: [
    { text: 'A) Conteúdo e tocadores de mídia (media players).', correct: true },
    { text: 'B) Ferramentas de desenvolvimento e protocolos de rede.', correct: false },
    { text: 'C) Certificação e ferramentas de autoria.',  correct: false }, 
    { text: 'D) Navegadores Web e conexão de rede sem fio.', correct: false },
    { text: 'E) Tecnologias assistivas e mecanismos de enlace.', correct: false },
  ]
   },
 {

 question: 'No que se refere à World Wide Web Consortium W3C, comunidade organizada por membros internacionais, é correto afirmar que ela possui como objetivos marcos:',                
   answers: [
    { text: 'A) Ditar regras para o desenvolvimento Web, as quais todos os desenvolvedores Web devem seguir, correndo o risco de serem punidos se agirem de forma diversa a essas regras.', correct: false },
    { text: 'B) Oferecer diretrizes, notas, artigos, tutoriais e afins aos profissionais que desenvolvem para Web, visando possibilitar uma Web cada vez mais acessível.', correct: true },
    { text: 'C) Ser responsável por tirar dúvidas de programação para Web em tempo real, por meio de atendentes localizados em diversas partes do mundo.',  correct: false }, 
    { text: 'D) Estabelecer guias para as transações financeiras que envolvem grande vulto de investimentos entre mais de dois países.', correct: false },
    { text: 'E)  Definir regras processuais para ações que se iniciam em uma plataforma Web e são transferidas para um sistema WebService.', correct: false },
  ]
   },
  ]
   



















