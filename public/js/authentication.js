var authEmailPassButton = document.getElementById('authEmailPassButton');
var createUserButton = document.getElementById('createUserButton');
var logOutButton = document.getElementById('logOutButton');
var alerta = document.getElementById('alerta');

var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');

var displayName = document.getElementById('displayName');
var displayNameAdd = document.getElementById('displayNameAdd');

var auth; 
firebase.auth().onAuthStateChanged(function(user) {
	auth = !!user;
	if(user) {
		displayName.innerText = "Bem vindo "+ user.email;			
	}
});

function tratarErro(erro) {
	switch (erro) {
			case 'auth/wrong-password':
				alerta.innerText = 'A senha inválida.';
				break;
			case "auth/email-already-in-use":
				alerta.innerText = 'Usuário já cadastrado.';
				break;
			case "auth/weak-password": 
				alerta.innerText = 'A senha deve ter pelo menos 6 caracteres.';
				break;
			case "auth/invalid-email":
				alerta.innerText = 'O endereço de e-mail está mal formatado.';
				break;
			case "auth/user-not-found":
				alerta.innerText = 'Usuário não encontrado.';
				break;
		}		
		alerta.classList.remove("hidden");
}

function limparCampos(){
	emailInput.value = '';
	passwordInput.value = '';
}

createUserButton.addEventListener('click', function () {
	if(!auth) return;
	
	firebase
	.auth()
	.createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
	.then(function (result){
		limparCampos();
	})
	.catch(function (error) {
		// console.log(error.code);
		// console.log(error.message);	
		tratarErro(error.code);		
	});	  
});

authEmailPassButton.addEventListener('click', function () {
	firebase
		.auth()
		.signInWithEmailAndPassword(emailInput.value, passwordInput.value)
		.then(function (result) {
			alerta.className += " hidden";
			window.location.href = "/add.html";
			limparCampos();
		})
		.catch(function (error) {
			// console.log(error.code);
			// console.log(error.message);
			tratarErro(error.code);	
		});
});

logOutButton.addEventListener('click', function () {
	firebase
		.auth()
		.signOut()
		.then(function (result) {
			alerta.className += " hidden";
			displayName.innerText = "Você não está autenticado.";
			limparCampos();			
		})
		.catch(function (error) {
			// console.log(error);
		});
});