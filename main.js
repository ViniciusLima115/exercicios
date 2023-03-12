const form = document.querySelector('form');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
const btnValidar = document.getElementById('btn-validar');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  const mensagemDeSucesso = 'O formulário está válido!'

  if (campoB.value > campoA.value) {
    const containerMensagemSucesso = document.querySelector('.success-message');
    containerMensagemSucesso.innerHTML = mensagemDeSucesso;
    containerMensagemSucesso.style.display = 'block';
    document.querySelector('.error-message').style.display = 'none'

    setTimeout(() => {
      containerMensagemSucesso.style.display = 'none';
    }, 3000);

    campoA.value = '';
    campoB.value = '';

  } else {
    document.querySelector('.error-message').style.display = 'block';
    document.querySelector('.success-message').style.display = 'none';
    campoA.value = '';
    campoB.value = '';
  }
});
