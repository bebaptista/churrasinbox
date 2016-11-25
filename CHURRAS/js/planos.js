function GravaAssinatura() {
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			window.alert("Obrigado por se tornar nosso assinante. O seu pedido foi registrado com sucesso!");
       		}
	}
	xmlhttp.open("POST", "http://www.smartsoft.com.br/webservice/restifydb/Employees/chu_compra_assinante", true);
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send('_data={"nome":"'+document.getElementById('nome').value+ '","email":"'+document.getElementById('email').value+ '","endereco":"'+document.getElementById('endereco').value+ '","cep":"'+document.getElementById('cep').value+ '","numero":"'+document.getElementById('numero').value+ '","numero_cartao":"'+document.getElementById('numero_cartao').value+ '","vencimento":"'+document.getElementById('vencimento').value+ '","codigo_seguranca":"'+document.getElementById('codigo_seguranca').value+ '"}');
    
}

function GravaCompraUnica() {
	var xmlhttp;
    xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			window.alert("Obrigado pela compra. O seu pedido foi registrado com sucesso!");
       		}
	}
	xmlhttp.open("POST", "http://www.smartsoft.com.br/webservice/restifydb/Employees/chu_compra_unica", true);
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send('_data={"nome":"'+document.getElementById('nome').value+ '","email":"'+document.getElementById('email').value+ '","endereco":"'+document.getElementById('endereco').value+ '","cep":"'+document.getElementById('cep').value+ '","numero":"'+document.getElementById('numero').value+ '","numero_cartao":"'+document.getElementById('numero_cartao').value+ '","vencimento":"'+document.getElementById('vencimento').value+ '","codigo_seguranca":"'+document.getElementById('codigo_seguranca').value+ '"}');
}

function consultaCEP() {
			var xhr = new XMLHttpRequest ();
			var link;
			link = 'http://api.postmon.com.br/v1/cep/' + document.getElementById('cep').value;
			xhr.open ('GET', link);
   			xhr.send();
   			 
			xhr.onreadystatechange = function () {
        			if (xhr.readyState === XMLHttpRequest.DONE) {
        				if (xhr.status === 200) {
           		 			var data = JSON.parse (xhr.responseText);
           		 			document.getElementById('endereco').value = data.logradouro;
           		 			document.getElementById('bairro').value = data.bairro;
           		 			document.getElementById('cidade').value = data.cidade;
           		 			document.getElementById('estado').value = data.estado;
           		 			
        				}
        				else if (xhr.status === 404) {
           		 			alert(xhr.statusText) ;
           		 		}
           		 		else alert("Erro desconhecido");
   			 	}
			}
}