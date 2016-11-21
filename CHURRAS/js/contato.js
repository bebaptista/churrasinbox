function GravaContato() {
	var xmlhttp;
    xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			window.alert("Obrigado pelo contato!");
       		}
	}
	xmlhttp.open("POST", "http://www.smartsoft.com.br/webservice/restifydb/Employees/chu_contato", true);
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		
	var objectToSend = {
		"nome": document.getElementById('nome').value,
		"email": document.getElementById('email').value,
		"mensagem": document.getElementById('mensagem').value
	};
		
	xmlhttp.send('_data=' + JSON.stringify(objectToSend));
}
