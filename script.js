// Guarda algumas mensagens que podem aparecer na página.
const mensagens = [
  "Estudar é uma forma de construir novas oportunidades!",
  "A vida acadêmica também é feita de colaboração e descobertas.",
  "Cada novo conhecimento é um passo no desenvolvimento profissional."
];

// Esta função é executada quando o usuário clica no botão.
// Ela escolhe uma mensagem aleatória e modifica o texto da página.
function mostrarMensagem() {
  const indice = Math.floor(Math.random() * mensagens.length);
  document.getElementById("mensagem").textContent = mensagens[indice];
}

// Associa o clique do botão à função criada acima.
document.getElementById("botaoCuriosidade").addEventListener("click", mostrarMensagem);
