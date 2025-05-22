import initScrollSuave from './js/modules/scroll-suave.js';
import initAnimacaoScroll from './js/modules/scroll-animacao.js';
import MenuMobile from './js/modules/menu-mobile.js';
import CarrosselStack from './js/modules/carrosselstack.js';

initAnimacaoScroll();
MenuMobile();
initScrollSuave();
CarrosselStack();


//Animação
if (window.SimpleAnime) {
    new SimpleAnime();
}
