export default function MenuMobile(){
    const menuMobile = document.querySelector("[data-menu='button'");
    const ulMenu = document.querySelector("[data-menu='list'");
    
    menuMobile.addEventListener('click', () => {
        ulMenu.classList.toggle('ativo');
    });
}
