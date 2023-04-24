const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let listaDeItens = []




function adicionarTarefa() {
    listaDeItens.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''
    mostrarTarefa()
}

function mostrarTarefa() {

    let novaLi = ''

    listaDeItens.forEach((item, posicao) => {

        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
        <img  src="img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
        <p>${item.tarefa}</p>
        <img src="img/trash.png" alt="tarefa-para-o-lixo" onclick= "deletarItem(${posicao})">
        </li>
    `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(listaDeItens))
}

function concluirTarefa(posicao) {
    listaDeItens[posicao].concluida = !listaDeItens[posicao].concluida
    mostrarTarefa()
}

function deletarItem(posicao) {
    listaDeItens.splice(posicao, 1)
    mostrarTarefa()
}

function recarregarTarefas() {
    const tarefasLocalStorage = localStorage.getItem('lista')

    if (tarefasLocalStorage) {
        listaDeItens = JSON.parse(tarefasLocalStorage)
    }
    mostrarTarefa()

}



recarregarTarefas()
button.addEventListener('click', adicionarTarefa)