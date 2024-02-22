// Obtém a lista de planos
const listaItens = document.getElementById("listaPass");
// Obtém todos os planos da lista
const itens = listaItens.getElementsByTagName("li");
// Adiciona um ouvinte de evento de clique a cada item
for (let i = 0; i < itens.length; i++) {
  itens[i].addEventListener("click", function () {
    // Remove a classe "ativo" de todos os itens
    for (let j = 0; j < itens.length; j++) {
      itens[j].classList.remove("ativo");
    }

    // Adiciona a classe "ativo" ao item clicado
    this.classList.add("ativo");
  });
}

// VOLTAR ETAPA E AVANCAR, ADICIONANDO E REMOVENDO CLASSE
const voltarEtapaBtn = document.getElementById("voltarEtapaBtn");
const etapa1 = document.getElementById("etapa1");
const etapa2 = document.getElementById("etapa2");
const avancaEtapa1 = document.getElementById("avancaEtapa1");
const avancaEtapa2 = document.getElementById("avancaEtapa2");

// Controla o estado da página
let etapaAtual = 1;

// Botão para avançar da etapa 1 para a etapa 2
avancaEtapa1.addEventListener("click", function () {
  etapa1.style.display = "none";
  etapa2.style.display = "block";
  etapaAtual = 2;
});

/*
// Botão para avançar da etapa 2 para a etapa 3
avancaEtapa2.addEventListener("click", function () {
  // Implemente a lógica da etapa 2 para etapa 3 aqui
});
*/

// Botão para voltar uma etapa
voltarEtapaBtn.addEventListener("click", function () {
  if (etapaAtual === 2) {
    etapa2.style.display = "none";
    etapa1.style.display = "block";
    etapaAtual = 1;
  }
});

// marcar ao clicar no item inteiro e nao so no radio
function marcarOpcao1() {
  let opcao1 = document.getElementById("pix");
  opcao1.checked = true;
}
function marcarOpcao2() {
  let opcao2 = document.getElementById("boleto");
  opcao2.checked = true;
}
function marcarOpcao3() {
  let opcao3 = document.getElementById("cartao");
  opcao3.checked = true;
}
