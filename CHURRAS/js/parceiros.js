function GravaParceiro() {
	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {               
			window.alert("Obrigado pelo interesse em ser nosso parceiro!");
			document.getElementById("parceiro").reset();
		}
	}
	
	xmlhttp.open("POST", "http://www.smartsoft.com.br/webservice/restifydb/Employees/par_parceiro", true);
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send('_data={"nome":"'+document.getElementById('nome').value+'","responsavel":"'+document.getElementById('responsavel').value+'","cnpj":"'+document.getElementById('cnpj').value+'","tel":"'+document.getElementById('telefone').value+'","email":"'+document.getElementById('email').value +'"}');
}

