function validarFloat(valor){ 
	valor = parseFloat(valor) 
	if (isNaN(valor)) { 
		return "" 
	}else{ 
	 return valor 
	} 
} 
	
function valida_enviar(){
    //valido o nome
    if (document.fvalida.nome.value.length==0){
       alert("Nome da máteria precisa ser preenchido")
       document.fvalida.nome.focus()
       return 0;
    }

    //valido o preco. Tem que ser inteiro maior que 0
    preco = document.fvalida.preco.value
    preco = validarFloat(preco)
   /*  if (preco == ""){
       alert("Tem que introduzir o preço do curso.")
       document.fvalida.preco.focus()
       return 0;
    }else{ */
       if (preco<0){
          alert("O preço deve ser maior que 0.")
          document.fvalida.preco.focus()
          return 0;
       }
    // }
	
	//valido o tempo. Tem que ser inteiro maior que 0
    horas = document.fvalida.carga_horaria.value
    horas = validarFloat(horas)
 	if (horas<0){
	  alert("A carga horária deve ser maior que 0.")
	  document.fvalida.carga_horaria.focus()
	  return 0;
	}

    //valido o interesse
/*     if (document.fvalida.interesse.selectedIndex==0){
       alert("Deve selecionar um motivo de seu contato.")
       document.fvalida.interesse.focus()
       return 0;
    } */

    //o formulário se envia
    alert("Muito obrigado por enviar o formulario");
    document.fvalida.submit();
}