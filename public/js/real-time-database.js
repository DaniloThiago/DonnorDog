var addButton = document.getElementById('addButton');
var logOutButton = document.getElementById('logOutButton');

var imageInput = document.getElementById('imageInput');
var nameInput = document.getElementById('nameInput');
var racaInput = document.getElementById('racaInput');
var sexoInput = document.getElementById('sexoInput');
var situacaoInput = document.getElementById('situacaoInput');
var msgInput = document.getElementById('msgInput');
var instagramInput = document.getElementById('instagramInput');
var facebookInput = document.getElementById('facebookInput');
var telefoneInput = document.getElementById('telefoneInput');
var emailInput = document.getElementById('emailInput');

if(!!addButton)
addButton.addEventListener('click', function(){
	create(
		imageInput.value,
		nameInput.value,
		racaInput.value,
		sexoInput.value,
		situacaoInput.value,
		msgInput.value,
		instagramInput.value,
		facebookInput.value,
		telefoneInput.value,
		emailInput.value
	);
});

function limparCampos(){
	emailInput.value = '';
	passwordInput.value = '';
}

if(!!logOutButton)
logOutButton.addEventListener('click', function () {
	firebase
		.auth()
		.signOut()
		.then(function (result) {
			console.log($(logOutButton).parent(), $('#goin').parent());
			$(logOutButton).parent().addClass('hidden')
			$('#goin').html('ENTRAR')
			alerta.className += " hidden";
			displayName.innerText = "Você não está autenticado.";
			limparCampos();			
		})
		.catch(function (error) {
			console.log(error);
		});
});

function create( foto, nome, raca, sexo, necessidade, mensagem, instagram, facebook, telefone, email) {
	var data = {
		foto: foto,
		nome: nome,
		raca: raca,
		sexo: sexo,
		necessidade: necessidade,
		mensagem: mensagem,
		instagram: instagram,
		facebook: facebook,
		telefone: telefone,
		email: email
	};

	firebase.database().ref().child('dogs').push(data);
};

firebase.database().ref('dogs');