const carrossel = document.getElementById('carrossel');
const fotos = document.querySelector('.fotos');
const imagens = document.querySelectorAll('.foto');
let currentIndex = 0;
let startX = 0;
let endX = 0;

const totalFotos = imagens.length;

// Função para mover para a próxima imagem
function moverParaImagem(index) {
  if (index < 0) index = totalFotos - 1;
  if (index >= totalFotos) index = 0;

  currentIndex = index;
  fotos.style.transform = `translateX(-${currentIndex * 100}%)`; // Sem espaço entre as imagens
}

// Detecta o movimento do toque
carrossel.addEventListener('touchstart', (event) => {
  startX = event.touches[0].clientX;
});

carrossel.addEventListener('touchmove', (event) => {
  endX = event.touches[0].clientX;
});

carrossel.addEventListener('touchend', () => {
  if (startX > endX + 50) {
    // Deslizar para a esquerda (próxima imagem)
    moverParaImagem(currentIndex + 1);
  } else if (startX < endX - 50) {
    // Deslizar para a direita (imagem anterior)
    moverParaImagem(currentIndex - 1);
  }
});
