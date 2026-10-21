const listaDeEstudantes = [
    "Beatriz Oliveira",
    "Carlos Eduardo",
    "Daniela Santos",
    "Gabriel Ferreira",
    "Helena Rodrigues",
    "Lucas Vinícius"
];

const elementoLista = document.getElementById("listaEstudantes");
const elementoContador = document.getElementById("contadorNomes");

function exibirListaAutomaticamente() {
    elementoLista.innerHTML = "";

    for (let i = 0; i < listaDeEstudantes.length; i++) {
        const itemLi = document.createElement("li");
        itemLi.className = "item-nome";

        itemLi.innerHTML = `
            <span>${listaDeEstudantes[i]}</span>
            <span class="posicao-tag">#${i + 1}</span>
        `;

        elementoLista.appendChild(itemLi);
    }

    elementoContador.innerText = `Total exibido: ${listaDeEstudantes.length} estudantes cadastrados.`;
    elementoContador.style.color = "#16a34a";

    console.log(`Lista exibida com sucesso: ${listaDeEstudantes.length} itens processados.`);
}

function limparLista() {
    elementoLista.innerHTML = "";
    elementoContador.innerText = "Lista limpa pelo usuário. Nenhum nome na tela.";
    elementoContador.style.color = "#475569";

    console.log("Tela limpa.");
}

function adicionarNovoNome() {
    const inputElemento = document.getElementById("campoNovoNome");
    const nomeDigitado = inputElemento.value.trim();

    if (nomeDigitado === "") {
        elementoContador.innerText = "Por favor, digite um nome antes de adicionar.";
        elementoContador.style.color = "#dc2626";
        return;
    }

    let duplicacao = false;

    for (let i = 0; i < listaDeEstudantes.length; i++) {
        if (listaDeEstudantes[i].toLowerCase() === nomeDigitado.toLowerCase()) {
            duplicacao = true;
            break;
        }
    }

    if (duplicacao) {
        elementoContador.innerText = `O nome "${nomeDigitado}" já está cadastrado na lista.`;
        elementoContador.style.color = "#dc2626";
    } else {
        listaDeEstudantes.push(nomeDigitado);
        exibirListaAutomaticamente();
        
        elementoContador.innerText = `Estudante "${nomeDigitado}" cadastrado com sucesso! Total: ${listaDeEstudantes.length}`;
        elementoContador.style.color = "#16a34a";
    }

    inputElemento.value = "";
    inputElemento.focus();
}

function exibirOrdemInvertida() {
    elementoLista.innerHTML = "";

    let i = listaDeEstudantes.length - 1;

    while (i >= 0) {
        const nomeAtual = listaDeEstudantes[i];
        const itemLi = document.createElement("li");

        itemLi.className = "item-nome";
        itemLi.innerHTML = `
            <span>${nomeAtual}</span>
            <span class="posicao-tag">#${i + 1}</span>
        `;

        elementoLista.appendChild(itemLi);
        i--;
    }

    elementoContador.innerText = `Visualizando registros em ordem inversa (${listaDeEstudantes.length} estudantes).`;
    elementoContador.style.color = "#0284c7";
}

exibirListaAutomaticamente();