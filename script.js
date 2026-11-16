// Index
function registro() {
	location.replace("registro.html")
}

// Login
function efetuar(){
	let user = document.querySelector('#user').value;
	let senha1 = document.querySelector('#senha').value;
	let senha2 = document.querySelector('#senha2').value;
	let msg = document.querySelector('#msgfalha');
	let msgS = document.querySelector('#msgfalha2');
	if (user == '' || senha1 == "" || senha2 == ""){
		msg.innerText = "Por favor, preencha todos os campos!"
	}
	else if(senha1.length < 5 || senha2.length < 5){
		msgS.innerText = `Sua senha precisa ter pelo menos 5 caracteres!`
	}
	else if (senha1 != senha2){
		msgS.innerText = "Suas senhas são diferentes."
	}
	else{
		location.replace("leitura.html");
	}
}

// Tarefas

function adicionar() {
	let inputNova = document.querySelector('.nova');
	let textoDigitado = inputNova.value.trim();
	let containerTarefas = document.querySelector('.tarefas');

	if (textoDigitado !== "") {
		containerTarefas.innerHTML += `
			<div class="item-tarefa">
				<h4 class="texto">${textoDigitado}</h4>
				<button onclick="fracasso(this)" class="btnfracasso">Descartar</button>
				<button onclick="sucesso(this)" class="btnsucesso">Concluída</button>
			</div>`;
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

// Leitura
function livros() {
	location.replace('livros.html')
}
const nomeLivro = localStorage.getItem("nomeLivro")
document.querySelector("#atual").innerHTML = nomeLivro;
const pags = localStorage.getItem("pags")
document.querySelector("#npags").innerHTML = `${pags} páginas`;



//Livros
function iniciar(){
	const nomeLivro = document.querySelector("#inputNome").value;
	const nPag = document.querySelector("#inputPages").value;
	const Num = Number(nPag); 
	const divaviso = document.querySelector("#aviso");
	if (nomeLivro.trim().length === 0 || Num <= 0 ){
		divaviso.innerHTML = `<p id="aviso"> Por favor verifique suas respostas!</p>`
		return;
	}
	localStorage.setItem("nomeLivro", nomeLivro)	
	localStorage.setItem("pags", Num)
	location.replace("leitura.html")
}

