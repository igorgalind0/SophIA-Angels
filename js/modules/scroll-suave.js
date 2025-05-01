export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll('a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        if (section) {
            const topo = section.offsetTop - 100;
            window.scrollTo({
                top: topo,
                behavior: 'smooth',
            });
        }
    }
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}