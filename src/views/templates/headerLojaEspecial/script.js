document.addEventListener('scroll', function() {
    const faixatop = document.querySelector('.headerLojaEspecialTemplate');
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 136) {
        faixatop.style.position = 'fixed';
        faixatop.style.top = '0'; // Garantir que ele fique no topo
    } else {
        faixatop.style.position = 'sticky';
    }
});
