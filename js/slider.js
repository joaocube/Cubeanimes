/*
// Lista de imagens
const imagens = [
  "/publics/imgs/img-op.png",
  "/publics/imgs/img-zom100.jpg",
  "/publics/imgs/img-jujutsu.png",
  "/publics/imgs/img-Undead-Murder-Farce.jpg",
  "/publics/imgs/img-mobpsycho.jpg",
];

// Função para escolher uma imagem aleatória
function escolherImagemAleatoria() {
  let indice = Math.floor(Math.random() * imagens.length);
  return imagens[indice];
}

// Alterar a imagem quando a página é carregada
window.addEventListener("load", () => {
  let imagemElemento = document.getElementById("imgSlide");
  let novaImagemSrc = escolherImagemAleatoria();
  imagemElemento.src = novaImagemSrc;
});
*/

const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
let currentIndex = 0;

function showImage(index) {
  slides.forEach((image, i) => {
    if (i === index) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showImage(currentIndex);
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// imagem inicial
showImage(currentIndex);
// muda slide a cada x segundos
setInterval(nextSlide, 12000);
