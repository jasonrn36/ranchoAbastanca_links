let indiceAtual = 0;

function moverSlide(direcao) {
    const carrossel = document.querySelector('.carrossel');
    const slides = document.querySelectorAll('.slide');
    indiceAtual = (indiceAtual + direcao + slides.length) % slides.length;
    carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
    }

// Função automática
function iniciarCarrosselAutomatico() {
    setInterval(() => {
        moverSlide(1); // avança 1 slide a cada intervalo
    }, 3000); // tempo em milissegundos (3 segundos)
    }

// inicia quando a página carrega
window.onload = iniciarCarrosselAutomatico;