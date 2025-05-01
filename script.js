import initScrollSuave from './js/modules/scroll-suave.js';
import initAnimacaoScroll from './js/modules/scroll-animacao.js';

initScrollSuave();
initAnimacaoScroll();

//Animação
if (window.SimpleAnime) {
    new SimpleAnime();
}