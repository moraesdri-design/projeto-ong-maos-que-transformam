export function iniciarFormulario() {
    const formulario = document.querySelector("form");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        console.log("Formulário enviado para processamento.");
    });
}
