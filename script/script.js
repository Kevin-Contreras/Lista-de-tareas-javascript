
	//DECLARACION DE VARIABLES
	var boton = document.querySelector('#boton')
	var texto = document.querySelector('#texto')
	var cajetin = document.querySelector('#contenedor')
	var color1 = document.querySelector('#color1')
	var color2 = document.querySelector('#color2')
	//DECLARACION DE FUNCIONES
	function crear (){
		cajetin.style.display= 'block'
		if (texto.value.length > 45 ) {
			alert('no se permiten mas de 45 letras')
			cajetin.style.display = 'none'
			texto.value =""
		} else if( texto.value.length == 0 ) {
			alert('no has ingresado inguna letra')
			cajetin.style.display = 'none'
			
		}
	}
	function color(){
		
		cajetin.style.display= 'none'
		var div = document.createElement('DIV')
		var contenedor = document.body.appendChild(div) 
		var cre = document.createElement('P')
		var textnode = document.createTextNode(texto.value);
		cre.appendChild(textnode);
		contenedor.appendChild(cre)
		var eliminar = document.createElement('BUTTON')
		var x = document.createTextNode('X');
		eliminar.appendChild(x);
		contenedor.appendChild(eliminar)
		contenedor.style.borderBottom = '#D2D8D7 solid 2px'
		if (texto.value.length > 45 || texto.value.length === 0 ) {
			
			cre.removeChild(textnode)
			contenedor.removeChild(cre)
			eliminar.removeChild(x)
			contenedor.removeChild(eliminar)
			document.body.removeChild(div)
		}
		else{
			false
		}
		texto.value = "";
		eliminar.addEventListener('click',function(){
			cre.removeChild(textnode)
			contenedor.removeChild(cre)
			eliminar.removeChild(x)
			contenedor.removeChild(eliminar)
			document.body.removeChild(div)
					})
					contenedor.style.background = 'rgba(246,41,12,1)';
					contenedor.style.background = ' -moz-linear-gradient(top, rgba(246,41,12,1) 0%, rgba(246,41,12,0.2) 51%, rgba(242,45,19,0) 64%, rgba(231,56,39,0) 100%);';
					contenedor.style.background =" -webkit-gradient(left top, left bottom, color-stop(0%, rgba(246,41,12,1)), color-stop(51%, rgba(246,41,12,0.2)), color-stop(64%, rgba(242,45,19,0)), color-stop(100%, rgba(231,56,39,0)));"
					contenedor.style.background=" -webkit-linear-gradient(top, rgba(246,41,12,1) 0%, rgba(246,41,12,0.2) 51%, rgba(242,45,19,0) 64%, rgba(231,56,39,0) 100%);"
					contenedor.style.background ="-o-linear-gradient(top, rgba(246,41,12,1) 0%, rgba(246,41,12,0.2) 51%, rgba(242,45,19,0) 64%, rgba(231,56,39,0) 100%);"
					contenedor.style.background =" -ms-linear-gradient(top, rgba(246,41,12,1) 0%, rgba(246,41,12,0.2) 51%, rgba(242,45,19,0) 64%, rgba(231,56,39,0) 100%);"
					contenedor.style.background =" linear-gradient(to bottom, rgba(246,41,12,1) 0%, rgba(246,41,12,0.2) 51%, rgba(242,45,19,0) 64%, rgba(231,56,39,0) 100%);"
					contenedor.style.filter = "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6290c', endColorstr='#e73827', GradientType=0 );"
	}
	
	function color3(){
		
		cajetin.style.display= 'none'
		var div = document.createElement('DIV')
		var contenedor = document.body.appendChild(div) 
		var cre = document.createElement('P')
		var textnode = document.createTextNode(texto.value);
		cre.appendChild(textnode);
		contenedor.appendChild(cre)
		var eliminar = document.createElement('BUTTON')
		var x = document.createTextNode('X');
		eliminar.appendChild(x);
		contenedor.appendChild(eliminar)
		contenedor.style.borderBottom = '#D2D8D7 solid 1px'
		if (texto.value.length > 45 || texto.value.length === 0 ) {
			
			cre.removeChild(textnode)
			contenedor.removeChild(cre)
			eliminar.removeChild(x)
			contenedor.removeChild(eliminar)
			document.body.removeChild(div)
		}
		else{
			false
		}
		texto.value = "";
		eliminar.addEventListener('click',function(){
			cre.removeChild(textnode)
			contenedor.removeChild(cre)
			eliminar.removeChild(x)
			contenedor.removeChild(eliminar)
			document.body.removeChild(div)
					})
					contenedor.style.background = 'rgb(37, 173, 207)'

	}
	//DECLARACION DE EVENTOS
	boton.addEventListener('click',crear)
	color1.addEventListener('click',color)
	color2.addEventListener('click',color3)

	