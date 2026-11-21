const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");
const filtro = document.getElementById("filtro");
const lista = document.getElementById("lista");

let cadastros = [];

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const idade = Number(document.getElementById("idade").value);

  if (nome.length < 3) {
    mensagem.className = "erro";
    mensagem.textContent = "Digite um nome com pelo menos 3 letras.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    mensagem.className = "erro";
    mensagem.textContent = "Digite um e-mail válido.";
    return;
  }

  if (telefone.length < 10) {
    mensagem.className = "erro";
    mensagem.textContent = "Digite o telefone com DDD.";
    return;
  }

  if (idade < 1 || idade > 120) {
    mensagem.className = "erro";
    mensagem.textContent = "Digite uma idade entre 1 e 120.";
    return;
  }

  cadastros.push({
    nome: nome,
    email: email,
    telefone: telefone,
    idade: idade
  });

  formulario.reset();
  mensagem.className = "sucesso";
  mensagem.textContent = "Cadastro realizado com sucesso!";
  mostrarLista();
});

function mostrarLista() {
  const texto = filtro.value.toLowerCase();
  lista.innerHTML = "";

  for (let i = 0; i < cadastros.length; i++) {
    const c = cadastros[i];

    if (c.nome.toLowerCase().includes(texto) || c.email.toLowerCase().includes(texto)) {
      const item = document.createElement("li");
      item.textContent = c.nome + " - " + c.email + " - " + c.telefone + " - " + c.idade + " anos";
      lista.appendChild(item);
    }
  }
}

filtro.addEventListener("input", mostrarLista);

mostrarLista();
