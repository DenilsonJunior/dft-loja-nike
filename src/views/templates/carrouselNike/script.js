document.addEventListener('DOMContentLoaded', function () {
    function configureSlider() {
        // Verifique o tamanho da tela
        const isMobile = window.innerWidth < 768;

        var animation = { duration: 40000, easing: (t) => t }

        // Configure o slider com base na largura da tela
        new KeenSlider("#carrouselNike", {
            loop: true,
            mode: "free",
            slides: { origin: "auto", perView: isMobile ? 2 : 2.5, spacing: 10 },
            range: {
                min: 0,
                max: 0,
            },
            created(s) {
                s.moveToIdx(5, true, animation);
            },
            updated(s) {
                s.moveToIdx(s.track.details.abs + 5, true, animation);
            },
            animationEnded(s) {
                s.moveToIdx(s.track.details.abs + 5, true, animation);
            },
        });
    }

    // Inicialize o slider na carga inicial
    configureSlider();
});

window.addEventListener('resize', function() {
    configureSlider();
});