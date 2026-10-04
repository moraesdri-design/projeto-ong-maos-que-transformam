export function iniciarNavegacao() {
    const app = document.getElementById("app");
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", async function(event) {
            event.preventDefault();

            const pagina = this.getAttribute("href");

            history.pushState(null, "", pagina);

            const resposta = await fetch(pagina);
            const html = await resposta.text();

            const documento = new DOMParser().parseFromString(html, "text/html");
            const novoConteudo = documento.querySelector("main");

            app.innerHTML = novoConteudo.innerHTML;
        });
    });
}
