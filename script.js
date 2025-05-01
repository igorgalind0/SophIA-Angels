import initScrollSuave from './js/modules/scroll-suave.js';
import initAnimacaoScroll from './js/modules/scroll-animacao.js';

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

initScrollSuave();
initAnimacaoScroll();

//Animação
if (window.SimpleAnime) {
    new SimpleAnime();
}