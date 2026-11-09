// ==============================================================================
// QUESTÃO 1: Manipulação Básica de Texto
// ==============================================================================
const titulo = document.getElementById('titulo-principal');
const paragrafo = document.getElementById('paragrafo-boas-vindas');
const btnAlterarTexto = document.getElementById('btn-alterar-texto');

btnAlterarTexto.addEventListener('click', () => {
  // Leitura opcional do conteúdo atual via textContent
  console.log('Título anterior:', titulo.textContent);
  console.log('Parágrafo anterior:', paragrafo.textContent);

  // Alteração dinâmica do conteúdo textual
  titulo.textContent = 'DOM Manipulado com Sucesso!';
  paragrafo.textContent = 'Bem-vindo! Este texto foi alterado dinamicamente com JavaScript.';
});


// ==============================================================================
// QUESTÃO 2: Calculadora / Captura de Inputs
// ==============================================================================
const btnSomar = document.getElementById('btn-somar');
const inputValor1 = document.getElementById('valor1');
const inputValor2 = document.getElementById('valor2');
const elementoResultado = document.getElementById('resultado-soma');

btnSomar.addEventListener('click', () => {
  // Captura dos valores via .value e conversão com parseFloat
  const valor1 = parseFloat(inputValor1.value);
  const valor2 = parseFloat(inputValor2.value);

  // Validação simples
  if (isNaN(valor1) || isNaN(valor2)) {
    elementoResultado.textContent = 'Por favor, insira números válidos.';
    return;
  }

  // Realiza a soma e exibe no elemento #resultado-soma
  const soma = valor1 + valor2;
  elementoResultado.textContent = soma;
});


// ==============================================================================
// QUESTÃO 3: Criação e Remoção Dinâmica de Elementos
// ==============================================================================
const btnCriarAviso = document.getElementById('btn-criar-aviso');
const containerAvisos = document.getElementById('container-avisos');

btnCriarAviso.addEventListener('click', () => {
  // Cria o container do aviso na memória
  const novoAviso = document.createElement('div');
  novoAviso.classList.add('aviso-item');

  // Cria o texto do alerta
  const textoAviso = document.createElement('span');
  textoAviso.textContent = 'Este é um aviso importante!';

  // Cria o botão de fechar ("X")
  const btnFechar = document.createElement('button');
  btnFechar.textContent = 'X';
  btnFechar.classList.add('btn-fechar');

  // Remove o aviso correspondente ao clicar no botão "X"
  btnFechar.addEventListener('click', () => {
    novoAviso.remove();
  });

  // Monta a estrutura com appendChild
  novoAviso.appendChild(textoAviso);
  novoAviso.appendChild(btnFechar);
  containerAvisos.appendChild(novoAviso);
});


// ==============================================================================
// QUESTÃO 4: Alternar Classes (Tema Card)
// ==============================================================================
const btnToggleTema = document.getElementById('btn-toggle-tema');
const modulo4 = document.getElementById('modulo-4');

btnToggleTema.addEventListener('click', () => {
  // Alterna a classe .dark-theme no elemento #modulo-4
  modulo4.classList.toggle('dark-theme');
});


// ==============================================================================
// QUESTÃO 5: Percorrer Coleção e Estilização Condicional
// ==============================================================================
// Seleciona todas as células que possuem a classe .situacao
const celulasSituacao = document.getElementsByClassName('situacao');

// Percorre a coleção retornada utilizando for...of
for (const celula of celulasSituacao) {
  const texto = celula.textContent.trim();

  // Aplica estilização condicional via style.color
  if (texto === 'Concluído') {
    celula.style.color = '#22c55e'; // Verde
  } else if (texto === 'Pendente') {
    celula.style.color = '#ef4444'; // Vermelho
  }
}


// ==============================================================================
// QUESTÃO 6: Delegação de Eventos
// ==============================================================================
const painelBotoes = document.getElementById('painel-botoes');
const logBotao = document.getElementById('log-botao');

// Escutador associado apenas ao container pai
painelBotoes.addEventListener('click', (event) => {
  // Filtra e confere e.target e e.target.nodeName === 'BUTTON'
  if (event.target && event.target.nodeName === 'BUTTON') {
    logBotao.textContent = event.target.textContent;
  }
});


// ==============================================================================
// QUESTÃO 7: Manipulação de Atributos (Dataset/setAttribute)
// ==============================================================================
const caixaDestaque = document.getElementById('caixa-destaque');
const btnPrioridadeAlta = document.getElementById('btn-prioridade-alta');
const btnPrioridadeBaixa = document.getElementById('btn-prioridade-baixa');
const btnLimparAtributo = document.getElementById('btn-limpar-atributo');
const infoAtributo = document.getElementById('info-atributo');

// Função auxiliar para sincronizar a interface com o estado atual do atributo
function atualizarInfoAtributo() {
  const valorAtributo = caixaDestaque.getAttribute('data-prioridade');
  infoAtributo.textContent = valorAtributo !== null ? valorAtributo : 'Nenhum';
}

// a. Prioridade Alta
btnPrioridadeAlta.addEventListener('click', () => {
  caixaDestaque.setAttribute('data-prioridade', 'alta');
  atualizarInfoAtributo();
});

// b. Prioridade Baixa
btnPrioridadeBaixa.addEventListener('click', () => {
  caixaDestaque.setAttribute('data-prioridade', 'baixa');
  atualizarInfoAtributo();
});

// c. Remover Prioridade
btnLimparAtributo.addEventListener('click', () => {
  caixaDestaque.removeAttribute('data-prioridade');
  atualizarInfoAtributo();
});


// ==============================================================================
// QUESTÃO 8: Gestor de Tarefas Dinâmico (Renderização por Estado)
// ==============================================================================
// a. Array global de tarefas
const tarefas = [];

const formTarefa = document.getElementById('form-tarefa');
const inputTarefaTitulo = document.getElementById('input-tarefa-titulo');
const listaTarefas = document.getElementById('lista-tarefas');

// b. Função render() para sincronizar array e interface
function render() {
  // Limpa a lista visual
  listaTarefas.innerHTML = '';

  // Percorre o array e insere cada item no DOM
  tarefas.forEach((tarefa) => {
    const itemLi = document.createElement('li');
    itemLi.textContent = tarefa.titulo;
    listaTarefas.appendChild(itemLi);
  });
}

// c. Interceptação do envio do formulário
formTarefa.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o recarregamento da página

  const tituloTarefa = inputTarefaTitulo.value.trim();

  if (tituloTarefa !== '') {
    // Adiciona o novo objeto ao array com .push()
    tarefas.push({ titulo: tituloTarefa });

    // Limpa o campo do formulário
    inputTarefaTitulo.value = '';

    // Atualiza a tela chamando render()
    render();
  }
});