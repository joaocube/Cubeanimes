// repetir header e footer
const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<div id="modal-hamburger" class="modal-hamburger">
<div class="modalLeft">
    <ul class="menu-item">

        <li class="item">
            <a href="./index.html">
                <div class="item-icon">
                <img src="./publics/icons/home.svg" alt="sobre" width="20px" height="20px">
                </div>
                <div class="text-icon">
                    <strong>Inicio</strong>
                    <p>Voltar ao Inicio</p>
                </div>
            </a>
        </li>
        <li class="item">
            <a href="./onepiece.html">
                <div class="item-icon">
                <img src="./publics/icons/book.svg" alt="animes" width="20px" height="20px">
                </div>
                <div class="text-icon">
                    <strong>Animes</strong>
                    <p>Confira todo nosso catálogo</p>
                </div>
            </a>
        </li>
        <li class="item">
            <a href="#">
                <div class="item-icon">
                <img src="./publics/icons/calendar.svg" alt="calendario" width="20px" height="20px">
                </div>
                <div class="text-icon">
                    <strong>Calendário</strong>
                    <p>Animes em exibição</p>
                </div>
            </a>
        </li>
        <li class="item">
            <a href="Cubepass.html">
                <div class="item-icon">
                <img src="./publics/icons/star.svg" alt="passe" width="20px" height="20px">
                </div>
                <div class="text-icon">
                    <strong>Cube Pass</strong>
                    <p>Quer ter acesso a todo nosso site?</p>
                </div>
            </a>
        </li>
        <li class="item">
            <a href="contato.html">
                <div class="item-icon">
                <img src="./publics/icons/chat.svg" alt="chat" width="20px" height="20px">
                </div> <!-- FIM ITEM ICON -->
                <div class="text-icon">
                    <strong>Contato</strong>
                    <p>Precisando de ajuda?</p>
                </div>
            </a>
        </li>
    </ul>
</div> <!-- FIM MODAL LEFT -->
</div> <!-- FIM MODAL HAMBURGER -->

<div id="modal-login" class="modal-login">
<div class="modalRight">
    <ul class="menu-conta">
        <a href="login.html">
            <div class="btn-conta">
            <img src="./publics/icons/login.svg" alt="login" width="20px" height="20px">
                <li class="menu-conta-item cor-8">
                    <strong class="cor-8">Login</strong>
                    <p class="cor-11">Faça login na sua conta</p>
                </li>
            </div>
        </a>

        <a href="cadastrar.html">
            <div class="btn-conta cadastro">
            <img src="./publics/icons/login.svg" alt="cadastrar" width="20px" height="20px">
                <li class="menu-conta-item cor-8">
                    <strong class="cor-8">Cadastrar</strong>
                    <p class="cor-11">Crie uma conta agora!</p>
                </li>
            </div>
        </a>
    </ul>
</div>
</div>

<div class="header">
<div class="leftmenu" onclick="openHamburger()">
<img src="./publics/icons/hamburger.svg" alt="barras" width="20px" height="20px">
<p>NAVEGAR</p>
</div>

<a href="./index.html">
    <img src="./publics/imgs/logo.png" alt="logo" width="32px" height="32px">
</a>

<nav aria-label="primaria">
    <div class="rightmenu">
        <div class="search" onclick="openSearch()">
        <img src="./publics/icons/search.svg" alt="search" width="20px" height="20px">
        </div>
        <div id="login" onclick="openLogin()"></div>
    </div>
</nav> <!-- FIM NAVBAR CONTAINER -->
</div> <!-- FIM HEADER -->
`;
footer.innerHTML = `
<div class="footer-container">
<div class="footer-redes">

    <a href="https://www.linkedin.com/in/joao-batista-631120276/">
    <img src="./publics/icons/linkedin.svg" alt="linkedin" width="20px" height="20px">
    </a>

    <a href="https://github.com/JoaoCube">
    <img src="./publics/icons/github.svg" alt="github" width="20px" height="20px">
    </a>

</div>

<p class="footer-direitos cor-9 font-2-s">CubeElement © Alguns direitos reservados.</p>
</div> <!-- FIM FOOTER CONTAINER -->
`;

//BACKGROUND NO NAV AO ROLAR O SCROLL DO MOUSE PRA BAIXO
let nav = document.querySelector("header");
window.onscroll = () => {
  this.scrollY > 80
    ? nav.classList.add("sticky")
    : nav.classList.remove("sticky");
};

// Ativar Links do LeftModal Sidebar
const links = document.querySelectorAll(".modalLeft .menu-item .item a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

// Perguntas Frequentes
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// ABRIR MODAL DO HAMBURGER
function openHamburger() {
  const modalHamburger = document.getElementById("modal-hamburger");
  modalHamburger.classList.add("mostrar");

  modalHamburger.addEventListener("click", (e) => {
    if (e.target.id == "modal-hamburger" || e.target.id == "fechar") {
      modalHamburger.classList.remove("mostrar");
      localStorage.fechaModal = "modal-hamburger";
    }
  });
}
function openLogin() {
  const modalLogin = document.getElementById("modal-login");
  modalLogin.classList.add("mostrar");

  modalLogin.addEventListener("click", (e) => {
    if (e.target.id == "modal-login" || e.target.id == "fechar") {
      modalLogin.classList.remove("mostrar");
      localStorage.fechaModal = "modal-login";
    }
  });
}
