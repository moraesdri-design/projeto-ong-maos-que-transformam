export function salvarDados(chave, dados) {
    localStorage.setItem(chave, JSON.stringify(dados));
}

export function recuperarDados(chave) {
    const dados = localStorage.getItem(chave);

    if (dados) {
        return JSON.parse(dados);
    }

    return null;
}
