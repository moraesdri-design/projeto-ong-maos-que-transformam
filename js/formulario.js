import { salvarDados } from "./storage.js";

export function iniciarFormulario() {
    const formulario = document.querySelector("form");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const dadosFormulario = new FormData(formulario);
        const dados = Object.fromEntries(dadosFormulario.entries());

        salvarDados("cadastroONG", dados);

        console.log("Dados salvos:", dados);
    });
}
