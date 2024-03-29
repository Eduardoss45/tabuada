// Seleção de elementos no DOM
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");

// Função para criar a tabela de multiplicação
const createTable = (number, multiplicatorNumber) => {
  // Limpa o conteúdo da tabela antes de criar uma nova
  multiplicationTable.innerHTML = "";
  // Loop para calcular e exibir as operações de multiplicação
  for (let i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;
    // Template de uma linha da tabela
    const template = `
      <div class="row">
          <div class="operation">${number} x ${i} = </div>
          <div class="result">${result}</div>
      </div>`;
    // Parsing do template para HTML
    const parser = new DOMParser();
    const htmlTemplate = parser.parseFromString(template, "text/html");
    const row = htmlTemplate.querySelector(".row");
    // Adiciona a linha à tabela
    multiplicationTable.appendChild(row);
  }
  // Atualiza o título da tabela com o número escolhido
  multiplicationTitle.innerText = number;
};

// Evento de envio do formulário para calcular a tabuada
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita o comportamento padrão do formulário
  // Obtém os valores dos campos de entrada
  const multiplicationNumber = +numberInput.value;
  const multiplicatorNumber = +multiplicationInput.value;
  // Verifica se os campos estão preenchidos corretamente
  if (!multiplicationNumber || !multiplicatorNumber) return;
  // Chama a função para criar a tabela
  createTable(multiplicationNumber, multiplicatorNumber);
});
