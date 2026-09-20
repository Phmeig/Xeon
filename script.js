function registro() {
	location.replace("registro.html")
}

function adicionar() {
	let inputNova = document.querySelector('.nova');
	let textoDigitado = inputNova.value.trim();
	let containerTarefas = document.querySelector('.tarefas');

	// Evita adicionar tarefas em branco
	if (textoDigitado !== "") {
		containerTarefas.innerHTML += `
			<div class="item-tarefa">
				<h4 class="texto">${textoDigitado}</h4>
				<button onclick="fracasso(this)" class="btnfracasso">Descartar</button>
				<button onclick="sucesso(this)" class="btnsucesso">Concluída</button>
			</div>
		`;
		inputNova.value = "";
	}
}

function sucesso(botao) {
	let divTarefa = botao.parentElement;
	let txt = divTarefa.querySelector('.texto').textContent;
	let campoMsg = document.querySelector('.campoMsg');

	campoMsg.innerText = `Parabéns! Você concluiu sua tarefa: ${txt}!`;
	divTarefa.remove();
}

function fracasso(botao) {
	let divTarefa = botao.parentElement;
	let txt = divTarefa.querySelector('.texto').textContent;
	let campoMsg = document.querySelector('.campoMsg');

	campoMsg.innerText = `Você descartou sua tarefa: ${txt}!`;
	divTarefa.remove();
}