var nameInput = document.getElementById('nameInput');
var ageInput = document.getElementById('ageInput');
var addButton = document.getElementById('addButton');
var logOutButton = document.getElementById('logOutButton');

addButton.addEventListener('click', function(){
	create(nameInput.value, ageInput.value);
});

logOutButton.addEventListener('click', function () {
	firebase
		.auth()
		.signOut()
		.then(function (result) {
			console.log(result);
			alerta.className += " hidden";
			displayName.innerText = "Você não está autenticado.";
			limparCampos();			
		})
		.catch(function (error) {
			console.log(error);
		});
});

function create(name, age) {
	var data = {
		name: name,
		age: age
	};

	firebase.database().ref().child('dogs').push(data);
};

firebase.database().ref('dogs');