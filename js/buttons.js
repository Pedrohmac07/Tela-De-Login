function vibrarEBloquear(event, botao, mensagem, bloquearLink = false) {
  // Remove a classe de animação, caso já esteja aplicada
  botao.classList.remove('vibrate');

  // Força o reflow para reiniciar a animação
  void botao.offsetWidth;

  // Adiciona a classe de vibração
  botao.classList.add('vibrate');

  // Alerta com a mensagem
  alert(mensagem);

  // Bloqueia a navegação se for um link
  if (bloquearLink) {
    event.preventDefault();
  }
}

// Botão "Entrar"
document.getElementById('entrarBtn').addEventListener('click', function (event) {
  vibrarEBloquear(event, this, 'Esse é um site de teste, seu Login não foi efetuado e nem salvo.', true);
});

// Link "Esqueci a senha"
document.getElementById('esqueciBtn').addEventListener('click', function (event) {
  vibrarEBloquear(event, this, 'Como isso é um site teste, este botão não funciona.', true);
});

