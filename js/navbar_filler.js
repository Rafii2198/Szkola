fetch('/Szkola/lista.json')
	.then((response) => response.text())
	.then((data) => {
		filling(JSON.parse(data));
	});

function filling(lista) {
	let nav_pai = document.getElementById('pai_lista');
	let nav_wiai = document.getElementById('wiai_lista');
	let lista_pai = lista['pai'];
	let lista_wiai = lista['wiai'];
	lista_pai.forEach((element) => {
		console.log(element);
		let entry = document.createElement('a');
		let title = document.createTextNode(element['title']);
		entry.className = 'dropdown-item';
		entry.href = element['location'];
		nav_pai.appendChild(entry);
		entry.appendChild(title);
	});
	lista_wiai.forEach((element) => {
		console.log(element);
		let entry = document.createElement('a');
		let title = document.createTextNode(element['title']);
		entry.className = 'dropdown-item';
		entry.href = element['location'];
		nav_pai.appendChild(entry);
		entry.appendChild(title);
	});
}
