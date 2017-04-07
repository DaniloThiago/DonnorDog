var dogsList = document.getElementById('dogsList');

firebase.database().ref('dogs').on('value', function(snapshot) {
	dogsList.innerHTML = '';
	snapshot.forEach(function (item) {
		var li = document.createElement('li');
		var hr = document.createElement('hr');
		
		li.appendChild(document.createTextNode(item.val().name+': '+item.val().age));
		dogsList.appendChild(li);
		dogsList.appendChild(hr);
	});
});