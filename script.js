const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalName = document.getElementById("modal-name");
  const modalDesc = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close");

  const members = document.querySelectorAll(".time-list li");

  members.forEach(member => {
    member.addEventListener("click", () => {
      const img = member.querySelector("img").src;
      const name = member.querySelector("h1").innerText;
      const desc = member.querySelector("p").innerText;

      modalImg.src = img;
      modalName.textContent = name;
      modalDesc.textContent = desc;

      modal.style.display = "block";
    });
  });

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

import initScrollSuave from './js/modules/scroll-suave.js';
import initAnimacaoScroll from './js/modules/scroll-animacao.js';
import MenuMobile from './js/modules/menu-mobile.js';

MenuMobile();
initScrollSuave();
initAnimacaoScroll();

//Animação
if (window.SimpleAnime) {
    new SimpleAnime();
}

export default function CarrosselStack(){
    window.onload = () => {
        const list = document.getElementById('image-list');
        const items = list.querySelectorAll('li'); // Seleciona todos os itens
    
        // Duplicando os itens da lista para garantir um ciclo contínuo
        items.forEach(item => {
            const clone = item.cloneNode(true); // Clona o item
            list.appendChild(clone); // Adiciona a cópia ao final da lista
        });
    };
}