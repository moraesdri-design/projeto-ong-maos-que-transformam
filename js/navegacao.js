export function iniciarNavegacao() {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const pagina = this.getAttribute("href");

            history.pushState(null, "", pagina);
        });
    });
}
