document.addEventListener("DOMContentLoaded", function () {
    // IDs das seções
    const sectionIds = [
        "sobre-mim",
        "formacao-e-idiomas",
        "projetos",
        "contato"
    ];

    // Oculta todas as seções inicialmente
    sectionIds.forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    // Seleciona todos os links do grid
    document.querySelectorAll(".grid-imagens a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").replace("#", "");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = "block";
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});